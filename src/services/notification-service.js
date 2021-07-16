const fs = require("fs");
const webpush = require("web-push");

const constants = require("../util/constants");

const vapidKeys = {
  publicKey:
    "BHyoUBN7NtNslQsqHB39-GYg2U5dM0bQXo-_h-sHuPibPkdxUXKWGyruNPHGihCuroz5rLM9_vPiySAtI5d7gyA",
  privateKey: "B6-f-PPSQsfeeLe4ak559udMuogUWJoBRNRMyoKXOvc",
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

function saveVapId(subscription) {
  fs.writeFileSync(constants.FILE_NAME, JSON.stringify(subscription));
}

async function sendNotification(payload) {
  const subscription = JSON.parse(fs.readFileSync(constants.FILE_NAME));
  await webpush.sendNotification(subscription, JSON.stringify(payload));
  console.log(`Notification send for ${JSON.stringify(subscription)}`);
}

module.exports = {
  saveVapId,
  sendNotification,
};
