alter table public.operations_review_requests
  add constraint operations_review_requests_full_name_length
    check (char_length(btrim(full_name)) between 3 and 80),
  add constraint operations_review_requests_phone_format
    check (btrim(phone) ~ '^(\+?20)?1[0125][0-9]{8}$'),
  add constraint operations_review_requests_wash_name_length
    check (char_length(btrim(wash_name)) between 2 and 80),
  add constraint operations_review_requests_governorate_length
    check (char_length(btrim(governorate)) between 1 and 80),
  add constraint operations_review_requests_branches_count_value
    check (branches_count in ('1', '2-3', '4-6', '+7')),
  add constraint operations_review_requests_cars_per_day_value
    check (cars_per_day in ('<20', '20-50', '51-100', '+100')),
  add constraint operations_review_requests_role_value
    check (role in ('owner', 'manager', 'reception', 'other')),
  add constraint operations_review_requests_current_tools_length
    check (current_tools is null or char_length(current_tools) <= 300),
  add constraint operations_review_requests_main_problem_values
    check (
      cardinality(main_problem) between 1 and 8
      and main_problem <@ array[
        'branch-tracking',
        'bookings',
        'car-status',
        'day-closing',
        'team-permissions',
        'inventory',
        'retention-loyalty',
        'other'
      ]::text[]
    ),
  add constraint operations_review_requests_best_contact_time_length
    check (best_contact_time is null or char_length(best_contact_time) <= 80),
  add constraint operations_review_requests_source_value
    check (
      source is null
      or source in ('header', 'hero', 'setup', 'trial', 'final', 'footer', 'faq')
    );
