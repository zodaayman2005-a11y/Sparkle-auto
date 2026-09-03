alter table public.operations_review_requests
  drop constraint if exists operations_review_requests_phone_format;

update public.operations_review_requests
set phone = case
  when btrim(phone) ~ '^\+201[0125][0-9]{8}$' then btrim(phone)
  when btrim(phone) ~ '^201[0125][0-9]{8}$' then '+' || btrim(phone)
  when btrim(phone) ~ '^1[0125][0-9]{8}$' then '+20' || btrim(phone)
  else phone
end;

alter table public.operations_review_requests
  add constraint operations_review_requests_phone_format
    check (phone ~ '^\+201[0125][0-9]{8}$');

comment on column public.operations_review_requests.phone is
  'Canonical Egyptian mobile number stored as E.164: +201XXXXXXXXX.';
