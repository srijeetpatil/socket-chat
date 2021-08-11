import querystring from "querystring";
import axios from "../util/config";

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "/api/auth/login",
        querystring.stringify({
          username: username,
          password: password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        return resolve(response);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export const signup = (username, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "/api/auth/signup",
        querystring.stringify({
          username: username,
          password: password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        return resolve(response);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export const verifyme = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/auth/verifyme")
      .then((response) => {
        return resolve(response);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export const getPeople = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/users/")
      .then((response) => {
        return resolve(response);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export const sendText = (message, sender, reciever) => {
  return new Promise((resolve, reject) => {
    let data = new FormData();
    data.append("message", message);
    data.append("sender", sender);
    data.append("reciever", reciever);
    axios
      .post("/api/message", data)
      .then((response) => {
        return resolve(response);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export const getAllMessages = (id) => {
  return new Promise((resolve, reject) => {    
    if (id === "Global") {
      axios
        .get("/api/message/all")
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    } else {
      axios
        .post(
          "/api/message/get-messages",
          querystring.stringify({
            user2: id,
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    }
  });
};
