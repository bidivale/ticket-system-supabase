// src/app/tickets/page.js
import TicketList from "./TicketList";

const TicketListPage = () => {
  const dummyTickets = [
    {
      id: 1,
      title: "Write supabase Book",
      status: "Not started",
      author: "Chayan"
    },
    {
      id: 1,
      title: "Write Supabase Book",
      status: "Not started",
      author: "Chayan"
    },
    {
      id: 3,
      title: "Make videos for youtube channel",
      status: "Done",
      author: "David"
    }
  ]

  return (
    <>
      <h2>Ticket List</h2>
      <TicketList tickets={dummyTickets}/>
    </>
  )
}

export default TicketListPage
