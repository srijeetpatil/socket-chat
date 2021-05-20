var express = require("express");
var router = express.Router();
var app = require("../app");
var http = require("http").Server(app);
var io = require("socket.io")(http);

router.get("/", function (req, res, next) {
  let message = "Na tum jano na hum";
  io.emit("message", message);
  res.sendStatus(200);
});

module.exports = router;
