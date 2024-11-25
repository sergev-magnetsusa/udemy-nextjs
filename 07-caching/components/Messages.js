const Messages = ({messages}) => {
  return (
    <ul className="messages">
      {messages.map((msg) => (
        <li key={msg.id}>{msg.text}</li>
      ))}
    </ul>
  )
}

export default Messages