-- MIGRAÇÃO DE UMA VEZ SÓ — rode uma única vez, junto com a estreia do paywall.
--
-- Libera todas as contas que já existiam antes de o acesso passar a exigir
-- compra. Está num arquivo separado do schema.sql de propósito: o schema é
-- idempotente e pode ser reaplicado sempre, este aqui NÃO deve. Rodá-lo depois
-- do lançamento liberaria de graça qualquer pessoa que tiver criado conta no
-- intervalo.
--
-- Confira antes o que vai liberar:
--   select email, created_at from auth.users order by created_at;

insert into public.entitlements (email, status, source, product)
select lower(u.email), 'active', 'pre-lancamento', 'acesso vitalicio'
from auth.users u
where u.email is not null
on conflict (email) do nothing;

-- Resultado:
--   select email, source, granted_at from public.entitlements order by granted_at;
