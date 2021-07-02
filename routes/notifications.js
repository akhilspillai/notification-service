const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification-controller')

/* register for notification */
router.post('/register', notificationController.register);
router.post('/send', notificationController.sendNotification);

module.exports = router;
