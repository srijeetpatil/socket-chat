import React, { useEffect, useState } from "react";
import "../App.css";
import { setCookie, removeCookie } from "../util/cookie";
import { Avatar, Popover, Typography, makeStyles } from "@material-ui/core";
import { login, signup, getPeople } from "../util/api";
import More from "./More";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    cursor: "pointer",
  },
  avatar: {
    backgroundColor: "orange",
  },
}));

const logout = () => {
  removeCookie("auth");
  window.location.reload();
};

function People(props) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [people, setPeople] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "logout-popover" : undefined;

  useEffect(() => {
    const fetch = async () => {
      await getPeople().then((resolve) => {
        setPeople(resolve.data.people);
      });
    };
    fetch();
  }, []);

  const loginPressed = async (username, password) => {
    if (username && password) {
      await login(username, password).then((resolve) => {
        setCookie("auth", resolve.data.token, 5);
        window.location.reload();
      });
    }
  };

  const signupPressed = async (username, password) => {
    if (username && password) {
      await signup(username, password).then((resolve) => {
        setCookie("auth", resolve.data.token, 5);
        window.location.reload();
      });
    }
  };

  return (
    <>
      {props.user ? (
        <div>
          <div className="userPanel">
            <Avatar>{props.user.charAt(0)}</Avatar>
            <label className="userLabel">{props.user}</label>
            <More onClick={handleClick} />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography className={classes.typography} onClick={logout}>
                Log out
              </Typography>
            </Popover>
          </div>
          {
            <div
              className="person"
              onClick={() => props.updateChat("Global")}
              style={{
                marginTop: "2rem",
                backgroundColor: props.chat === "Global" ? "#F5F5F5" : "white",
              }}
            >
              <Avatar className={classes.avatar}>G</Avatar>
              <div>
                <label className="userLabel">Global</label>
                <p style={{ fontSize: "12px", marginLeft: "1rem" }}>
                  Click here to view Global messages
                </p>
              </div>
            </div>
          }
          <div className="contacts">
            {people.map((person) => {
              const personClicked = () => {                
                props.updateChat(person.username);
              };
              var backgroundColor;
              if (props.chat === person.username) backgroundColor = "#F5F5F5";
              return (
                <div
                  className="person"
                  key={person.username}
                  onClick={personClicked}
                  style={{ backgroundColor: backgroundColor }}
                >
                  <Avatar>{person.username.charAt(0)}</Avatar>
                  <div>
                    <label className="userLabel">{person.username}</label>
                    <p style={{ fontSize: "12px", marginLeft: "1rem" }}>
                      Click here to view {person.username} messages
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="loginBox">
          <div style={{ fontWeight: "600", fontSize: "18px" }}>
            Log into your account
          </div>
          <input
            className="login_input"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            className="login_input"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div className="buttons">
            <button
              className="login_button"
              onClick={() => signupPressed(username, password)}
            >
              Signup
            </button>
            <label>Or</label>
            <button
              className="login_button"
              onClick={() => loginPressed(username, password)}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default People;
