import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./Chat.css";
import Input from "../../components/Input/Input";
import InfoBar from "../../components/TopBar/InfoBar";
import Messages from "../../components/Messages/Messages";

let socket;
function Chat({ username, room, setisAuthenticated }) {
  const [currMessage, setcurrMessage] = useState("");
  const [messages, setmessages] = useState([]);
  const [roomInfo, setroomInfo] = useState({});

  let ENDPOINT = "https://waris-react-chat-app-backend.herokuapp.com";
  // let ENDPOINT = "http://localhost:5000/";
  const disconnect = () => {
    socket.emit("disconnect");
    socket.off();
  };

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("joinRoom", { username, room }, err => {
      if (err) {
        setisAuthenticated(false);
        return alert(err);
      }
    });

    return disconnect();
  }, [room, username, setisAuthenticated, ENDPOINT]);

  useEffect(() => {
    socket.on("message", newMessage => {
      setmessages([...messages, newMessage]);
    });

    socket.on("roomInfo", sentInfo => {
      setroomInfo(sentInfo);
    });
  }, [messages]);

  const sendMessage = e => {
    e.preventDefault();
    if (currMessage) {
      setcurrMessage("");
      socket.emit("sendMessage", currMessage, () => setcurrMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar roomInfo={roomInfo} room={room} />
        <Messages messages={messages} username={username} />
        <Input
          currMessage={currMessage}
          setcurrMessage={setcurrMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}

export default Chat;
