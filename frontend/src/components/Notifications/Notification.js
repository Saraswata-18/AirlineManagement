
import React, { useState, useEffect } from 'react';
import api from '../API/api';
import { requestForToken, onMessageListener } from '../../firebase';
const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    fetchNotifications();
    requestForToken();
    onMessageListener()
      .then(payload => {
        console.log('Notification received: ', payload);
      })
      .catch(err => console.error('failed: ', err));
  }, []);

  const fetchNotifications = async () => {
    try {
      const res = await api.get('api/notifications');
      setNotifications(res.data);
      setUnreadCount(res.data.filter(n => !n.isRead).length);
    } catch (error) {
      console.error('Failed to fetch notifications', error);
    }
  };

  const markAsRead = async (id) => {
    try {
      await api.put(`api/notifications/${id}`);
      setNotifications(notifications&&notifications.map(n => n._id === id ? { ...n, isRead: true } : n));
      setUnreadCount(unreadCount - 1);
    } catch (error) {
      console.error('Failed to mark notification as read', error);
    }
  };

  return (
    <div className="relative ml-auto">
      <button className="text-white focus:outline-none relative">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14h-1a2.032 2.032 0 01-1.595-.595L15 12h5l1.405 1.405A2.032 2.032 0 0121 14h1a2.032 2.032 0 011.595.595L24 17h-9zm0 0a2.032 2.032 0 01-1.595.595H15zm0 0a2.032 2.032 0 01-1.595-.595H9m4-4H4a2.032 2.032 0 01-1.595-.595L1 12h14l-.405.405A2.032 2.032 0 0113 13zm0 0H4a2.032 2.032 0 01-1.595-.595L1 10h14l-.405.405A2.032 2.032 0 0113 11zm0 0h-5m2 4h-5m2-8H5m7 4h-5m-3-4h3"></path>
        </svg>
        {unreadCount > 0 && <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>}
      </button>
      <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden z-20">
        {notifications&&notifications.map(notification => (
          <div key={notification._id} className={`px-4 py-2 border-b ${notification.isRead ? 'bg-gray-100' : 'bg-white'}`}>
            <p className="text-sm">{notification.message}</p>
            {!notification.isRead && (
              <button onClick={() => markAsRead(notification._id)} className="text-blue-500 text-xs mt-1">
                Mark as read
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
