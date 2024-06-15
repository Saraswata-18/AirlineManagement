const express = require('express');
const router = express.Router();

const { getNotifications, markAsRead } = require('../controllers/notificationsController');
const { verifyToken } = require('../middlewares/authMiddleware');
const { sendPushNotification } = require('../controllers/notificationsController');

router.get('/', verifyToken, getNotifications);
router.put('/:id', verifyToken, markAsRead);
router.post('/send', sendPushNotification);

module.exports = router;


module.exports = router;
