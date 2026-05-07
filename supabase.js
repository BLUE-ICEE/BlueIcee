const SUPABASE_URL =
  'https://qxplmvnwzvyjsqfwqbva.supabase.co'

const SUPABASE_KEY =
  '/sb_publishable_i3SzWJgFFcwn_fOZRS0KBg_9CunDPNk'

const supabaseClient =
  supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  )
