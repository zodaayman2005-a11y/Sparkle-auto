create table if not exists public.operations_review_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  phone text not null,
  wash_name text not null,
  governorate text not null,
  branches_count text not null,
  cars_per_day text not null,
  role text not null,
  current_tools text,
  main_problem text[] not null,
  best_contact_time text,
  lang text not null default 'ar' check (lang in ('ar', 'en')),
  source text,
  plan text check (plan is null or plan in ('operations', 'growth', 'expansion')),
  user_agent text,
  status text not null default 'new'
);

comment on table public.operations_review_requests is
  'Private landing-page operations review requests. Server-side service-role access only.';

alter table public.operations_review_requests enable row level security;
revoke all on table public.operations_review_requests from anon, authenticated;
grant select, insert on table public.operations_review_requests to service_role;

create index if not exists operations_review_requests_created_at_idx
  on public.operations_review_requests (created_at desc);

create index if not exists operations_review_requests_status_idx
  on public.operations_review_requests (status, created_at desc);

create table if not exists public.operations_review_request_rate_limits (
  fingerprint text not null,
  window_started_at timestamptz not null,
  attempt_count smallint not null default 1 check (attempt_count > 0),
  primary key (fingerprint, window_started_at)
);

comment on table public.operations_review_request_rate_limits is
  'HMAC-hashed request fingerprints used for the fixed three-per-hour form limit.';

alter table public.operations_review_request_rate_limits enable row level security;
revoke all on table public.operations_review_request_rate_limits from anon, authenticated;
grant select, insert, update, delete on table public.operations_review_request_rate_limits
  to service_role;

create or replace function public.consume_operations_review_rate_limit(
  p_fingerprint text
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_window timestamptz := date_trunc('hour', now());
  next_count smallint;
begin
  if p_fingerprint is null or length(p_fingerprint) <> 64 then
    return false;
  end if;

  insert into public.operations_review_request_rate_limits (
    fingerprint,
    window_started_at,
    attempt_count
  )
  values (p_fingerprint, current_window, 1)
  on conflict (fingerprint, window_started_at)
  do update set attempt_count =
    public.operations_review_request_rate_limits.attempt_count + 1
  returning attempt_count into next_count;

  return next_count <= 3;
end;
$$;

revoke all on function public.consume_operations_review_rate_limit(text) from public;
revoke all on function public.consume_operations_review_rate_limit(text) from anon, authenticated;
grant execute on function public.consume_operations_review_rate_limit(text) to service_role;
