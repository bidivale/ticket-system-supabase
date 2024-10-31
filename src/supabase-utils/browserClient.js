// src/supabase-utils/browserClient.js
import { createBrowserClient } from '@supabase/ssr';

export const getSupabaseBrowserClient = () => {

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  return createBrowserClient(supabaseUrl, supabaseKey);
};
  
  