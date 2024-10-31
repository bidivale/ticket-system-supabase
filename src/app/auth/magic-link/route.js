// app/auth/magic-link/route.js
// this is server side login with magic link
// when signin with magic link is clicked in the login page - it hit this route handler

import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { NextResponse } from "next/server";

export async function POST (request) {
  const formData = await request.formData();
  const email = formData.get(email);

  const supabase = getSupabaseCookiesUtilClient();

  // we do not want to create new user by magic link, as it creates user immediately, without verifying
  // that way, if there is no user, it will through error
  const {data, error} = supabase.auth.signInWithOtp({
    email,
    options: {shouldCreateUser: false}
  });

  if (error) {
    return NextResponse.redirect(
      new URL("/error?type=magiclink", request.url),
      302
    );
  }

  const thanksUrl = new URL("/magic-thanks", request.url)

  return NextResponse.redirect(
    thanksUrl,
    302
  )
}

