var express = require("express");
var router = express.Router();
var User = require("../models/User");
var extractor = require("../util/token");

const verifyRequest = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    token = token.split("Token ")[1];
    if (token) {
      User.findOne({ token: token }, (err, result) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader("Content-type", "application/json");
          res.json({ error: "Internal server error" });
          return next(err);
        } else if (result) {
          return next();
        } else {
          res.statusCode = 403;
          res.setHeader("Content-type", "application/json");
          res.json({ error: "Unauthorized" });
        }
      });
    } else {
      res.statusCode = 403;
      res.setHeader("Content-type", "application/json");
      res.json({ error: "Unauthorized" });
    }
  } else {
    res.statusCode = 403;
    res.setHeader("Content-type", "application/json");
    res.json({ error: "Unauthorized" });
  }
};

router.get("/", verifyRequest, function (req, res, next) {
  let token = extractor(req);
  if (token) {
    User.find({ token: { $ne: token } }, "username", (err, result) => {
      if (err) {
        res.statusCode = 500;
        res.json({ error: "Internal server error" });
        return next(err);
      } else {
        res.statusCode = 200;
        res.json({ people: result });
      }
    });
  } else {
    res.statusCode = 403;
    res.json({ error: "Unauthorized" });
  }
});

module.exports = router;
