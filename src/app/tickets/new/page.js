'use client'
import { useRef } from "react";

const CreateTicket = () => {
  const ticketTitleRef = useRef(null);
  const ticketDescriptionRef = useRef(null);
  return (
    <article>

      {/* heading */}
      <h3>Create a new ticket</h3>

      {/* form to add new ticket */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("TODO: Add a new ticket")
        }}
      >
        {/* title input */}
        <input ref={ticketTitleRef} placeholder="Add a new title"/>
        {/* description input */}
        <textarea ref={ticketDescriptionRef} placeholder="Add a comment"/>
        {/* submit button */}
        <button type="submit">
          create ticket now
        </button>
      </form>

    </article>
  )
}

export default CreateTicket;
