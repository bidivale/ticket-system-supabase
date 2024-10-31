// scr/app/tickets/layout.js
import TenantName from "./TenantName";
import Nav from "./Nav";

export default function TicketsLayout(pageProps) {
  return (
    <>
      {/* first section is for tenant name and nagivation lists */}
      <section style={{borderBottom: "1px solid gray"}}>
        {/* tenant name component */}
        <TenantName tenantName="Packt" />
        {/* navigation component goes here */}
        <Nav/>
      </section>

      {/* 2nd section - contains the current page’s content by using what Next.js passes as a children prop. */}
      <section>{pageProps.children}</section>

     
    </>

  )

}
