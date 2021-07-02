const notificationSevice = require("../services/notification-service");

function register(req, res) {
  notificationSevice.saveVapId(req.body);
  res.sendStatus(200);
}

async function sendNotification(req, res) {
  try {
    // sample notification payload
    const notificationPayload = {
      notification: {
        title: "WM notification",
        body: "New version available!",
        icon: "images/logo-small.png",
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1,
        },
        actions: [
          {
            action: "Install",
            title: "Go to play store",
          },
        ],
      },
    };
    await notificationSevice.sendNotification(notificationPayload);
    res.status(200).json(notificationPayload);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = {
  register,
  sendNotification,
};
