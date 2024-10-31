// src/supabase-utils/cookiesUtilClient.js
// this is used in middleWare.js only as cookies() does not work in middleWare
import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export const getSupabaseReqResClient = ({ request }) => {

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  let response = {
    value: NextResponse.next({ request: request }),
  };

  const supabase = createServerClient(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
          });

          response.value = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(({ name, value, options }) => {
            response.value.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  return { supabase, response };
};