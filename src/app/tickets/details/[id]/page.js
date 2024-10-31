import TicketComments from "./TicketComments";
import classes from "./TicketDetails.module.css";

const ticketDetailsPage = ({params}) => {
  return (
    <article className={classes.ticketDetails}>

      {/* header section with id, status, authorname, date, ticket title */}
      <header>
        <strong>#{params.id}</strong> -{" "}
        <strong className={classes.ticketStatusGreen}>Open</strong>
        <br/>
        <small className={classes.authorAndDate}>
          Created by <strong>AuthorName</strong> at{" "}
          <time>December 10th 2025</time>
        </small>
        <h2>Ticket title should be here</h2>
      </header>

      {/* section for ticket details*/}
      <section>
        Sone details about the ticket shout be there
      </section>

      {/* comments - that is the footer */}
      <TicketComments />

    </article>
  )
}

export default ticketDetailsPage;