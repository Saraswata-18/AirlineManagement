// controllers/notificationsController.js
const Notification = require('../models/Notification');
const admin=require('../configure/firebaseAdmin');


exports.sendPushNotification = async (req, res) => {
  const { token, message } = req.body;

  const payload = {
    notification: {
      title: 'New Notification',
      body: message,
    },
  };

  try {
    await admin.messaging().sendToDevice(token, payload);
    res.status(200).json({ message: 'Notification sent' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send notification', error });
  }
};

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch notifications', error });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    await Notification.findByIdAndUpdate(id, { isRead: true });
    res.status(200).json({ message: 'Notification marked as read' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to mark notification as read', error });
  }
};
