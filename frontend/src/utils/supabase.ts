
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://csipyhzksqwfkwzjmjwd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzaXB5aHprc3F3Zmt3emptandkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwOTEyMDEsImV4cCI6MjAyNTY2NzIwMX0.sxmLow56YtWzRYyC7k8EFsUikKHIK9flLuPBONe-fWc')

export default supabase;