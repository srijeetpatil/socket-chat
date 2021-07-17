var User = require("../models/User");

const verifySocket = (token) => {
  return new Promise((resolve, reject) => {
    User.findOne({ token: token }, (err, result) => {
      if (err) {
        reject(false);
      } else if (result) {
        let username = result.username;
        resolve(username);
      } else {
        reject(false);
      }
    });
  });
};

module.exports = verifySocket;
