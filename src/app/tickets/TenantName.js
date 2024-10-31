
const TenantName = (props) => {
  return (
    <header style={{marginBottom: "10px"}}>
      <div
        style={{
          borderLeft: "4px solid orange",
          display: "block",
          padding: "4px 10px",
          fontSize: "1.1em"
        }}
      >
        Ticket system
        <strong style={{marginLeft: "1ex"}}>
          {props.tenantName}
        </strong>
      </div>
      
    </header>
  )
}

export default TenantName