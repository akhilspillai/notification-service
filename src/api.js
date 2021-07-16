const express = require("express");
const serverless = require("serverless-http");

const notificationsRouter = require("./routes/notifications");

const app = express();

app.use(express.json());

// app.use("/", indexRouter);
app.use("/.netlify/functions/api/notifications", notificationsRouter);

module.exports.handler = serverless(app);
