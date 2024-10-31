// src/middleware.js
import { NextResponse } from "next/server";
import { getSupabaseReqResClient } from "./supabase-utils/reqResClient";

export async function middleware(req) {
  const { supabase, response } = getSupabaseReqResClient({ request: req });
  
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    const requestedPath = req.nextUrl.pathname;

    console.log("requestedPath", requestedPath);

    if (requestedPath.startsWith("/tickets")) {
      if (!user) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    } else if (requestedPath === "/") {
      if (user) {
        return NextResponse.redirect(new URL("/tickets", req.url));
      }
    }

    return response.value;
  } catch (error) {
    console.error("Error in middleware:", error);
    // Handle the error appropriately, maybe redirect to an error page
    return NextResponse.redirect(new URL("/error", req.url));
  }
}

export const config = {
  matcher: ["/((?!.*\\.).*)"],
};