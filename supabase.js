const SUPABASE_URL =
  'https://qxplmvnwzvyjsqfwqbva.supabase.co'

const SUPABASE_KEY =
  '/sb_publishable_i3SzWJgFFcwn_fOZRS0KBg_9CunDPNk'

const supabaseClient =
  supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  )
create table messages (

  id bigint generated always as identity primary key,

  text text,

  username text,

  realm text,

  created_at timestamptz default now()

);

alter table messages enable row level security;

create policy "Allow read access"
on messages
for select
using (true);

create policy "Allow insert access"
on messages
for insert
with check (true);
