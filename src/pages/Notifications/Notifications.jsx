import './Notifications.css';

function Notifications() {
  const notifications = [
    {
      id: 1,
      user: 'reddy',
      message: 'liked your post',
      time: '2 min ago',
      unread: true
    },
    {
      id: 2,
      user: 'admin',
      message: 'started following you',
      time: '10 min ago',
      unread: true
    },
    {
      id: 3,
      user: 'user_123',
      message: 'commented on your photo',
      time: '1 hour ago',
      unread: false
    },
    {
      id: 4,
      user: 'user_168',
      message: 'liked your photo',
      time: '2 hour ago',
      unread: false
    },
    {
      id: 5,
      user: 'user_456',
      message: 'commented on your photo',
      time: '5 hour ago',
      unread: false
    },
    {
      id: 6,
      user: 'user_3455',
      message: 'commented on your photo',
      time: '10 hour ago',
      unread: false
    },
  ];

  return (
    <div className="notifications-container fade-in">
      <h2 className="notifications-title">Notifications</h2>

      <div className="notifications-list">
        {notifications.map((item) => (
          <div
            key={item.id}
            className={`notification-item ${
              item.unread ? 'unread' : ''
            }`}
          >
            <div className="notification-avatar">
              {item.user.charAt(0).toUpperCase()}
            </div>

            <div className="notification-content">
              <p>
                <strong>{item.user}</strong> {item.message}
              </p>
              <span className="notification-time">
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
