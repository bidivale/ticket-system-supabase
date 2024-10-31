// app/auth/pw-login/route.js
// this is optional server side login with password code
// this is be implemented in case frontend javasrcipt does not work
// the frontend password login code is in app/login.js that will work in general when js is working fine

import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { NextResponse } from "next/server";

export async function POST (request) {
  const formData = await request.formData();
  const email = formData.get(email);
  const password = formData.get(password);

  const supabase = getSupabaseCookiesUtilClient();
  const {data, error} = supabase.auth.signInWithPassword({
    email,
    password
  });

  const userData = data?.user;

  if (error || !userData){
    return NextResponse.redirect(
      new URL("/error?type=login-failed", request.url),
      {status: 302}
    );
  }

  return NextResponse.redirect(
    new URL("/ticket", request.url),
    {status: 302}
  )
}

