// src/app/tickets/Nav.js
'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";
import { useEffect } from "react";

const Nav = () => {
  // to know the active pathname of the URL
  const pathname = usePathname();
  const router = useRouter();

  const activeProps = { className: "contrast" };
  const inactiveProps = { className: "secondary outline" };

  const supabase = getSupabaseBrowserClient();

  // route to login page when singed out
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("onAuthStateChange", event);
      if (event === "SIGNED_OUT") {
        router.push("/");
      }
    })
    return () => subscription.unsubscribe();
  }, [])

  return (
    <nav>
      
      {/* list on the lest edge */}
      <ul>
        {/* Ticket List */}
        <li>
          <Link 
            role="button" 
            href="/tickets"
            // to highlight the ticket List nav when that exact page is open that means when url is tickets
            {...(pathname === "/tickets" ? activeProps : inactiveProps)}
          >
            Ticket List
          </Link>
        </li>
        {/* Create New Ticket */}
        <li>
          <Link 
            role="button" 
            href="/tickets/new"
            {...(pathname === "/tickets/new" ? activeProps : inactiveProps)}
          >
            Create New Ticket
          </Link>
        </li>
        {/* User List */}
        <li>
          <Link 
            role="button" 
            href="/tickets/users"
            {...(pathname === "/tickets/users" ? activeProps : inactiveProps)}
          >
            User List
          </Link>
        </li>
      </ul>

      {/* list on the right edge */}
      <ul>
        <li>
          <Link 
            role="button" 
            href="/logout"
            className="secondary"
            prefetch={false}
            onClick={(event) => {
              event.preventDefault();
              supabase.auth.signOut();
            }}
          >
            Log Out
          </Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default Nav
