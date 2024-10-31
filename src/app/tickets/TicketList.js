// scr/app/tickets/TicketList.js
import Link from "next/link";

const TicketList = ({tickets}) => {
  return (
    <table>
      {/* Table Head contains Headers */}
      <thead>
        <tr>
          <th>ID</th>
          <th></th>
          <th>Status</th>
        </tr>
      </thead>
      {/* Table body contains actual table data */}
      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket.id}>
            <td>{ticket.id}</td>
            <td>
              <Link href={`/tickets/details/${ticket.id}`}>{ticket.title}</Link>
            </td>
            <td>{ticket.status}</td>
          </tr>
        ))}
      </tbody>
      
      
    </table>
  )
}

export default TicketList
