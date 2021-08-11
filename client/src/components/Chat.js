import React, { useEffect } from "react";
import "../App.css";
import { Avatar, makeStyles, CircularProgress } from "@material-ui/core";
import SendButton from "./SendButton";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: "orange",
  },
}));

function Chat(props) {
  const classes = useStyles();

  useEffect(() => {
    const fetch = async () => {
      await props.getMessages();
    };
    fetch();
    scrollToBottom();
  }, [props.chat]);

  const scrollToBottom = () => {
    var height = document.getElementById("window-scroll").scrollHeight;
    document.getElementById("window-scroll").scrollTop = height;
  };

  return (
    <>
      <div className="chatTitle">
        <Avatar className={classes.avatar}>{props.chat.charAt(0)}</Avatar>
        <label style={{ marginLeft: "1rem" }}>{props.chat}</label>
      </div>
      <div className="window" id="window-scroll">
        {!props.messagesLoading &&
          props.messages.map((message, i) => {
            let content = message.content;
            let marginTop = "0px";
            let date = new Date(message.time);
            let hours = date.getHours().toString();
            let minutes = date.getMinutes().toString();
            let sender;
            if (minutes / 10 < 1) minutes = "0" + minutes;
            if (props.chat === "Global") sender = message.sender;
            return (
              <div key={i}>
                {message.sender === props.user ? (
                  <div
                    className="message_mine"
                    key={message._id}
                    style={{ marginTop: marginTop }}
                  >
                    {content}
                    <div className="time">
                      {hours}
                      {":"}
                      {minutes}
                    </div>
                  </div>
                ) : (
                  <div
                    className="message"
                    key={message._id}
                    style={{ marginTop: marginTop }}
                  >
                    <div className="messageUsername">{sender}</div>
                    {content}
                    <div className="time">
                      {hours}
                      {":"}
                      {minutes}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        {props.messagesLoading && props.user && (
          <CircularProgress style={{ margin: "auto" }} />
        )}
      </div>
      {props.user && (
        <form
          className="editMessagebox"
          onSubmit={(e) => {
            e.preventDefault();
            props.post();
          }}
          autoComplete="off"
        >
          <input
            className="editMessage"
            type="text"
            id="text-edit"
            placeholder="Type your message here"
          ></input>
          <SendButton post={props.post} type="submit" />
        </form>
      )}
    </>
  );
}

export default Chat;
