import { useState } from 'react'
import notificationData from './notifications'
import Notification from './Notification'
import './App.css'

function App() {
  const [notifications, setNotifications] = useState(notificationData)

  function clearNotification(id) {
    setNotifications(notifications.filter(notification => notification.id !== id))
  }

  function clearAllNotifications() {
    setNotifications([])
  }

  const notificationItems = notifications.map(notification => (
    <Notification
      key={notification.id}
      id={notification.id}
      name={notification.name}
      onClear={() => clearNotification(notification.id)}
    >
      {notification.message}
    </Notification>
  ))

  return (
    <main className="notifications-app">
      <header>
        <h1>Notifications</h1>
        <p>View your messages and clear them when you are done.</p>
      </header>

      <div className="notification-controls">
        <p role="status">Notifications remaining: {notifications.length}</p>
        <button
          type="button"
          onClick={clearAllNotifications}
          disabled={notifications.length === 0}
        >
          Clear all notifications
        </button>
      </div>

      <ul className="notification-list">{notificationItems}</ul>

      {notifications.length === 0 && (
        <p className="empty-message">No notifications remaining.</p>
      )}
    </main>
  )
}

export default App
