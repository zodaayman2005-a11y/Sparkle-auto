create index if not exists operations_review_request_rate_limits_window_idx
  on public.operations_review_request_rate_limits (window_started_at);

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

  -- Keep only the current and immediately preceding windows. The dedicated
  -- index makes this bounded cleanup cheap even after distributed traffic.
  delete from public.operations_review_request_rate_limits
  where window_started_at < current_window - interval '1 hour';

  insert into public.operations_review_request_rate_limits (
    fingerprint,
    window_started_at,
    attempt_count
  )
  values (p_fingerprint, current_window, 1)
  on conflict (fingerprint, window_started_at)
  do update set attempt_count = least(
    public.operations_review_request_rate_limits.attempt_count + 1,
    4
  )
  returning attempt_count into next_count;

  return next_count <= 3;
end;
$$;

revoke all on function public.consume_operations_review_rate_limit(text) from public;
revoke all on function public.consume_operations_review_rate_limit(text) from anon, authenticated;
grant execute on function public.consume_operations_review_rate_limit(text) to service_role;
