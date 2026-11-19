function Notification(props) {
  return (
    <li className="notification">
      <div className="notification-content">
        <p className="notification-id">Notification #{props.id}</p>
        <h2>{props.name}</h2>
        <p>{props.children}</p>
      </div>
      <button type="button" onClick={props.onClear}>
        Clear notification #{props.id}
      </button>
    </li>
  )
}

export default Notification
