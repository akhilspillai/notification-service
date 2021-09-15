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
        icon: "https://xenodochial-nightingale-ed8ef6.netlify.app/ng-bundle/assets/icons/icon-72x72.png",
        data: {
          "onActionClick": {
            "default": { "operation": "openWindow", "url": "https://xenodochial-nightingale-ed8ef6.netlify.app" }
          }
        },
      },
    };
    await notificationSevice.sendNotification(req.body || notificationPayload, req);
    res.status(200).json(notificationPayload);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = {
  register,
  sendNotification,
};
