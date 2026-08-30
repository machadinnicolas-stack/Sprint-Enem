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
