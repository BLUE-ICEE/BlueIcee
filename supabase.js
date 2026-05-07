const SUPABASE_URL =
  'https://YOURPROJECT.supabase.co'

const SUPABASE_KEY =
  'YOUR_LONG_ANON_KEY'

const supabaseClient =
  supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  )
