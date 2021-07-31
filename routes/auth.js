var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var User = require("../models/User");
var bcrypt = require("bcrypt");
var saltRounds = 10;

var secret = process.env.REACT_APP_SECRET;

function generateAccessToken(username) {
  return jwt.sign(username, secret);
}

function userExists(req, res, next) {
  let body = req.body;
  let username = body.username;
  User.findOne({ username: username }, (err, result) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-type", "application/json");
      res.json({ error: "Internal server error" });
      return next(err);
    } else if (result) {
      res.statusCode = 400;
      res.setHeader("Content-type", "application/json");
      res.json({ error: "User already exists with this username" });
    } else {
      return next();
    }
  });
}

router.post("/signup", userExists, (req, res, next) => {
  let body = req.body;
  let username = body.username;
  let password = body.password;
  if (password) {
    let token = generateAccessToken(username);
    bcrypt.hash(password, saltRounds, (error, hash) => {
      let newUser = new User({
        username: username,
        password: hash,
        token: token,
      });
      newUser.save((err, docs) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader("Content-type", "application/json");
          res.json({ error: "Internal server error" });
          return next(err);
        } else {
          let token = docs.token;
          res.statusCode = 200;
          res.setHeader("Content-type", "application/json");
          res.json({ token: token });
        }
      });
    });
  } else {
    res.statusCode = 400;
    res.setHeader("Content-type", "application/json");
    res.json({ error: "Enter valid password" });
  }
});

router.post("/login", (req, res, next) => {
  let body = req.body;
  let username = body.username;
  let password = body.password;
  User.findOne({ username: username }, (err, result) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-type", "application/json");
      res.json({ error: "Internal server error" });
      return next(err);
    } else if (result) {
      let hash = result.password;
      bcrypt.compare(password, hash, function (err, docs) {
        if (docs) {
          res.statusCode = 200;
          res.setHeader("Content-type", "application/json");
          res.json({ token: result.token });
        } else {
          res.statusCode = 403;
          res.setHeader("Content-type", "application/json");
          res.json({ error: "Invalid password or username" });
        }
      });
    }
  });
});

router.get("/verifyme", (req, res, next) => {
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
          res.statusCode = 200;
          res.setHeader("Content-type", "application/json");
          res.json({ username: result.username });
        } else {
          res.statusCode = 400;
          res.setHeader("Content-type", "application/json");
          res.json({ error: "Invalid token" });
        }
      });
    } else {
      res.statusCode = 400;
      res.setHeader("Content-type", "application/json");
      res.json({ error: "Invalid token" });
    }
  } else {
    res.statusCode = 400;
    res.setHeader("Content-type", "application/json");
    res.json({ error: "Invalid token" });
  }
});

module.exports = router;
