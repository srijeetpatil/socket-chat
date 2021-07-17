var express = require("express");
var router = express.Router();
var Message = require("../models/Message");
var User = require("../models/User");
var extractor = require("../util/token");

const verifyRequest = (req, res, next) => {
  let token = extractor(req);
  let reciever = req.body.reciever;
  let sender = req.body.sender;
  if (!req.body.message) {
    res.statusCode = 400;
    res.json({ error: "No message text" });
  } else if (token) {
    User.findOne({ token: token }, (err, result) => {
      if (err) {
        res.statusCode = 500;
        res.json({ error: "Internal server error" });
      } else if (result) {
        if (result.username !== sender || reciever === result.username) {
          res.statusCode = 400;
          res.json({ error: "Bad request" });
        } else {
          User.findOne({ username: reciever }, (err, result) => {
            if (err) {
              res.statusCode = 500;
              res.json({ error: "Internal server error" });
            } else if (result) {
              if (result.username !== reciever) {
                res.statusCode = 400;
                res.json({ error: "Bad request" });
              } else {
                return next();
              }
            } else {
              if (reciever === "Global") {
                res.locals.reciever = reciever;
                next();
              } else {
                console.log("Problem here " + result);
                res.statusCode = 404;
                res.json({ error: "Recipient Not found" });
              }
            }
          });
        }
      } else {
        res.statusCode = 403;
        res.json({ error: "Unauthorized" });
      }
    });
  } else {
    res.statusCode = 403;
    res.json({ error: "Unauthorized" });
  }
};

const verifyUser = (req, res, next) => {
  let token = extractor(req);
  if (token) {
    User.findOne({ token: token }, (err, result) => {
      if (err) {
        res.statusCode = 500;
        res.json({ error: "Internal server error" });
      } else if (result) {
        res.locals.username = result.username;
        next();
      } else {
        res.statusCode = 403;
        res.json({ error: "Unauthorized" });
      }
    });
  } else {
    res.statusCode = 403;
    res.json({ error: "Unauthorized" });
  }
};

router.post("/", verifyRequest, (req, res, next) => {
  let data = req.body;
  let message = data.message;
  let sender = data.sender;
  let reciever = data.reciever;
  let newMessage = new Message({
    content: message,
    sender: sender,
    reciever: reciever,
  });
  newMessage.save((err, docs) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: "Internal server error" });
      return next(err);
    } else {
      res.statusCode = 200;
      res.json({ docs: docs });      
    }
  });
});

router.get("/all", (req, res, next) => {
  Message.find({ reciever: "Global" })
    .sort({ time: "asc" })
    .exec((err, result) => {
      if (err) {
        res.statusCode = 500;
        res.json({ error: "Internal server error" });
        return next(err);
      } else {
        res.statusCode = 200;
        res.json({ messages: result });
      }
    });
});

router.post("/get-messages", verifyUser, (req, res, next) => {
  let username = res.locals.username;
  let user2 = req.body.user2;
  if (user2) {
    User.findOne({ username: user2 }, (err, result) => {
      if (err) {
        res.statusCode = 500;
        res.json({ error: "Internal server error" });
        return next(err);
      } else if (result) {
        Message.find({
          $or: [
            { sender: username, reciever: user2 },
            { sender: user2, reciever: username },
          ],
        })
          .sort({ time: "asc" })
          .exec((err, result) => {
            if (err) {
              res.statusCode = 500;
              res.json({ error: "Internal server error" });
              return next(err);
            } else {
              res.statusCode = 200;
              res.json({ messages: result });
            }
          });
      }
      else {
        res.statusCode = 400;
        res.json({ error: "User doesnt exist" });
      }
    });
  } else {
    res.statusCode = 400;
    res.json({ error: "Give other user's data" });
  }
});

module.exports = router;
