const notificationSevice = require("../services/notification-service");

function register(req, res) {
  notificationSevice.saveVapId(req.body, req);
  res.sendStatus(200);
}

async function sendNotification(req, res) {
  try {
    // sample notification payload
    const defaultPayload = {
      notification: {
        title: "Wavemaker notification",
        icon: "/ng-bundle/assets/icons/icon-72x72.png",
      },
    };
    const payload = req.body || defaultPayload;
    await notificationSevice.sendNotification(payload, req);
    res.status(200).json(payload);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = {
  register,
  sendNotification,
};
