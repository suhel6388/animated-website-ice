const SUPABASE_URL = "https://cugojtqubmljkryqizvx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1Z29qdHF1Ym1samtyeXFpenZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0ODQ4NTYsImV4cCI6MjA4NjA2MDg1Nn0.Gt-efgw-W0vC1H2A05Uv777zpxgfTODwutIzZn-1wwc"

const supabase_client = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);


