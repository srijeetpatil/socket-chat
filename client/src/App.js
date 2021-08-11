import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import "./App.css";
import { socket } from "./util/Socket";
import { useHistory, withRouter, useParams } from "react-router-dom";
import { getAllMessages, verifyme } from "./util/api";
import { sendText } from "./util/api";
import { CircularProgress } from "@material-ui/core";
import AppIcon from "./components/AppIcon";

const People = lazy(() => import("./components/People"));
const Chat = lazy(() => import("./components/Chat"));

function App(props) {
  var socketObject = useRef(null);
  const history = useHistory();
  const [messages, setMessages] = useState([]);
  const [messagesLoading, setMessagesLoading] = useState(true);
  const [user, setUser] = useState("");
  const [chat, setChat] = useState("");

  var pageId = window.location.pathname;
  if (pageId) {
    pageId = pageId.split("/")[1];
  }

  useEffect(() => {
    socketObject.current = socket;

    socketObject.current.on("new_message", (data) => {
      let newMessage = data.docs;
      //This puts message in message array regardless of route
      //This needs to be fixed
      setMessages((oldArr) => [...oldArr, newMessage]);
    });
  }, []);

  const updateChat = (chat) => {
    setChat(chat);
    history.push(`/${chat}`);
  };

  useEffect(() => {
    const fetch = async () => {
      if (!user) {
        try {
          let user = await verifyme();
          setUser(user.data.username);
        } catch (e) {
          console.error(e.message);
        }
      }
      if (!props.match.params.id) {
        setChat("Global");
        history.push("/Global");
      } else {
        setChat(props.match.params.id);
      }
    };
    fetch();
  }, [props]);

  const getMessages = () => {
    return new Promise(async (res, rej) => {
      try {
        setMessagesLoading(true);
        const response = await getAllMessages(props.match.params.id);
        let messages = response.data.messages;
        if (Array.isArray(messages)) {
          setMessages(messages);
          setMessagesLoading(false);
        }
        return res(messages);
      } catch (e) {
        return rej(e);
      }
    });
  };

  const post = async () => {
    let text = document.getElementById("text-edit").value;
    let sender = user;
    let reciever = chat;
    if (text) {      
      document.getElementById("text-edit").value = "";
      await sendText(text, sender, reciever)
        .then((resolve) => {
          let message = resolve.data.docs;
          socketObject.current.emit("send_message", { message: message });
        })
        .catch((reject) => {});
    }
  };

  const changeChat = (username) => {
    history.push("/" + username);
  };

  return (
    <Suspense className="chatBox" fallback={() => <CircularProgress />}>
      <div className="heading">
        <AppIcon />
        Socket based chat app, made with MERN Stack
      </div>
      <div className="container">
        <div className="people">
          <People
            changeChat={changeChat}
            user={user}
            chat={chat}
            updateChat={updateChat}
          />
        </div>
        <div className="chatBox">
          <Chat
            getMessages={getMessages}
            messages={messages}
            messagesLoading={messagesLoading}
            post={post}
            chat={chat}
            user={user}
          />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
