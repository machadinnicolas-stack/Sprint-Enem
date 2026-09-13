-- Sprint ENEM: tabela de dados do usuário (preferências, gamificação, plano de estudos)
-- Rode este script no SQL Editor do seu projeto Supabase (Dashboard > SQL Editor > New query).

create table if not exists public.user_data (
  user_id uuid primary key references auth.users (id) on delete cascade,
  preferences jsonb,
  gamification jsonb,
  plan jsonb,
  updated_at timestamptz not null default now()
);

-- Mantém updated_at sempre atualizado em cada UPDATE, sem precisar setar no client.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_user_data_updated_at on public.user_data;
create trigger set_user_data_updated_at
  before update on public.user_data
  for each row
  execute function public.set_updated_at();

-- Row Level Security: cada usuário só enxerga/edita a própria linha.
alter table public.user_data enable row level security;

drop policy if exists "Users can read own data" on public.user_data;
create policy "Users can read own data"
  on public.user_data for select
  using (auth.uid() = user_id);

drop policy if exists "Users can insert own data" on public.user_data;
create policy "Users can insert own data"
  on public.user_data for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update own data" on public.user_data;
create policy "Users can update own data"
  on public.user_data for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Sprint ENEM: contador diário de avaliações de redação feitas com IA (Gemini).
-- Como o produto é vendido em pagamento único (sem recorrência), esse contador
-- limita o custo de API por usuário (ver server/redacaoRateLimit.ts).
create table if not exists public.redacao_ai_usage (
  user_id uuid primary key references auth.users (id) on delete cascade,
  usage_date date not null default current_date,
  count int not null default 0
);

alter table public.redacao_ai_usage enable row level security;

-- O usuário pode LER o próprio consumo, mas não escrevê-lo. Com a anon key
-- (que é pública, vai no bundle) e o próprio JWT, qualquer usuário conseguiria
-- zerar o contador pelo console do navegador e gastar orçamento de IA sem teto.
-- Só a service role (SUPABASE_SECRET_KEY, usada apenas no servidor) escreve aqui.
drop policy if exists "Users can read own ai usage" on public.redacao_ai_usage;
create policy "Users can read own ai usage"
  on public.redacao_ai_usage for select
  using (auth.uid() = user_id);

-- Removidas: permitiam ao próprio usuário reescrever o contador.
drop policy if exists "Users can insert own ai usage" on public.redacao_ai_usage;
drop policy if exists "Users can update own ai usage" on public.redacao_ai_usage;

-- O "dia" da cota é o dia civil de Brasília, não UTC: com UTC a cota do aluno
-- virava às 21h, no meio do horário de estudo.
create or replace function public.redacao_ai_usage_today(p_user_id uuid)
returns int
language sql
as $$
  select coalesce(
    (select count
       from public.redacao_ai_usage
      where user_id = p_user_id
        and usage_date = (now() at time zone 'America/Sao_Paulo')::date),
    0
  );
$$;

-- Incremento atômico em um único statement: duas avaliações simultâneas do mesmo
-- aluno não podem mais ler o mesmo valor e gravar a mesma contagem.
create or replace function public.redacao_ai_usage_increment(p_user_id uuid)
returns void
language sql
as $$
  insert into public.redacao_ai_usage (user_id, usage_date, count)
  values (p_user_id, (now() at time zone 'America/Sao_Paulo')::date, 1)
  on conflict (user_id) do update
    set count = case
          when public.redacao_ai_usage.usage_date = (now() at time zone 'America/Sao_Paulo')::date
            then public.redacao_ai_usage.count + 1
            else 1
          end,
        usage_date = (now() at time zone 'America/Sao_Paulo')::date;
$$;

-- Funções acessíveis apenas pela service role — o navegador não deve poder
-- mexer no medidor de consumo, nem para ler por um caminho alternativo.
revoke execute on function public.redacao_ai_usage_today(uuid) from public;
revoke execute on function public.redacao_ai_usage_increment(uuid) from public;
