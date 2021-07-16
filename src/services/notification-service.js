const fs = require("fs");
const webpush = require("web-push");

const constants = require("../util/constants");

const vapidKeys = {
  publicKey:
    "BBFn_uPDK0L4hc9Lmk1e4yZv4LA2Qi1mjXtGKSOup_g0UMfxRoQgZZFH0riGveUvhBftu_YkshRxgfzKZWEW3BE",
  privateKey: "3FoX78eSBP271og76tlScreuDigIaGKMzTKvzwpZRGA",
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

function saveVapId(subscription, req) {
  // fs.writeFileSync(constants.FILE_NAME, JSON.stringify(subscription));
  console.log(`Writing subscription: ${JSON.stringify(subscription)}`);
  req.app.set(constants.FILE_NAME, JSON.stringify(subscription));
}

async function sendNotification(payload, req) {
  // const subscription = JSON.parse(fs.readFileSync(constants.FILE_NAME));
  const subscription = JSON.parse(req.app.get(constants.FILE_NAME));
  console.log(`Got subscription: ${JSON.stringify(subscription)}`);
  await webpush.sendNotification(subscription, JSON.stringify(payload));
  console.log(`Notification send for ${JSON.stringify(subscription)}`);
}

module.exports = {
  saveVapId,
  sendNotification,
};
