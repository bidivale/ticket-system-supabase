// src/app/error/page.js

import Link from "next/link";

export default function errorPage({searchParams}) {

  const type = searchParams();
  const knownErrors = ["login-failed", "magiclink"];

  return (
    <div style={{textAlign: "center"}}>
      <h1>Ooops</h1>
      {type === "login-failed" && (
        <strong>Sorry, Login was not successful</strong>
      )};
      {type === "magiclink" && (
        <strong>
          Could not send a magic link. May be you have a typo in your E-Mail?
        </strong>
      )}
      {!knownErrors.includes(type) && (
        <strong>
          Something went wrong. Please try again later or contact support
        </strong>
      )}
      <br /> 
      <br />
      <Link role="button" href="/">
        Go Back
      </Link>
    </div>
  )
}