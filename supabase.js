const SUPABASE_URL = 'PASTE_YOUR_URL'
const SUPABASE_KEY = 'PASTE_YOUR_ANON_KEY'

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
)
