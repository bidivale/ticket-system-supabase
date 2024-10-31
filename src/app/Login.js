// src/app/login
"use client"
import Link from "next/link";
import React, { useRef } from 'react';
import { useRouter } from "next/navigation";
// import supabase from "@/config/supabaseClient";
import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";

const Login = ({isPasswordLogin}) => {

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const router = useRouter();
  const supabase = getSupabaseBrowserClient();
  console.log(supabase);

  return (
    <form
      // to make the form hit the related url 
      action={isPasswordLogin? "/auth/pw-login" : "/auth/magic-link"}
      // by default the method is get. But it exposes the sensitive form data to the url
      method="POST"
      onSubmit={(event) => {
        // we do not want to peventDefault for magic link as the code of it is in server side, should directly hit to route handler
        isPasswordLogin && event.preventDefault();
        if (isPasswordLogin) {
          supabase.auth.signInWithPassword({
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value
          })
          .then((result) => {
            if (result.data?.user) {
              router.push("/tickets")
            } else {
              alert("Could not sign in")
            }
          })
        } else {
          alert("User wants login with magic link")
        }
      }}
    >
      <article style={{ maxWidth: "420px", margin: "auto" }}>
        <header>Login</header>
        <fieldset>
          {/* email field */}
          <label htmlFor="email">
            Email
            <input
              ref={emailInputRef}
              type="email"
              id="email"
              name="email"
              required
            />
          </label>
          {/* password */}
          {isPasswordLogin &&
          <label htmlFor="password">
            Password 
            <input
              ref={passwordInputRef}
              type="password"
              id="password"
              name="password"
              required
            />
          </label>
          }
        </fieldset>

        {/* Link to switch login option */}
        <p>
          {isPasswordLogin ? (
            <Link
              href={{
                pathname: "/",
                query: {magicLink: "yes"},
              }}
            >
              Go to Magic Link Login
            </Link>
          ) : (
            <Link
              href={{
                pathname: "/",
                query: {magicLink: "no"}
              }}
            >
              Go to Password Login
            </Link>
          )
          }
        </p>

        {/* Submit button */}
        <button type="submit">
          Sign in with 
          {isPasswordLogin? " Password" : " Magic Link"}
        </button>

      </article>
      
    </form>
  )
}

export default Login

