const SUPABASE_URL = 'https://ldpqbkgwqpjzphkiksit.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkcHFia2d3cXBqenBoa2lrc2l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY2MzQ2MTYsImV4cCI6MTk3MjIxMDYxNn0.EDVQbiON_cGxhPklFxuL1D1k7NPKybDvfSPw0JsUJm8';

export const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
