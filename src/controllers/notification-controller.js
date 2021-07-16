const notificationSevice = require("../services/notification-service");

function register(req, res) {
  notificationSevice.saveVapId(req.body, req);
  res.sendStatus(200);
}

async function sendNotification(req, res) {
  try {
    // sample notification payload
    const notificationPayload = {
      notification: {
        title: "Wavemaker notification",
        body: "This is a test notification!",
        icon: "https://xenodochial-nightingale-ed8ef6.netlify.app/ng-bundle/assets/icons/icon-72x72.png",
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1 + Math.floor(10000 * Math.random()),
          url: "https://xenodochial-nightingale-ed8ef6.netlify.app",
        },
        actions: [
          {
            action: "Install",
            title: "Go to play store",
          },
        ],
      },
    };
    await notificationSevice.sendNotification(notificationPayload, req);
    res.status(200).json(notificationPayload);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = {
  register,
  sendNotification,
};
