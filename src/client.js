import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cbekuljwczebbyulwdki.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiZWt1bGp3Y3plYmJ5dWx3ZGtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyNDkzMTQsImV4cCI6MjA0NTgyNTMxNH0.lBGIIbp--bF1uk-OmplFsH2MhDsGWmh7lKRDJh5ne18";
export const supabase = createClient(supabaseUrl, supabaseKey);
