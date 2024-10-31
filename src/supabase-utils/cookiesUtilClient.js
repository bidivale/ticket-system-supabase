// src/supabase-utils/cookiesUtilClient.js
// this is for server side except middleWare
// used in route handle - auth/logout/route.js
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const getSupabaseCookiesUtilClient = () => {

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  const cookieStore = cookies();

  return createServerClient(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({name, value, options}) => {
              cookieStore.set(name, value, options)
            });
          } catch(err) {
              console.log("Failed to set cookies", err);
          }
        },
      },
    }
  );
};