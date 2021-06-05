import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import ReactEmoji from "react-emoji";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import "./Messages.css";

function Messages({ messages, username }) {
  TimeAgo.addLocale(en);

  const timeAgo = new TimeAgo("en-US");

  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => {
        let isSentByCurrentUser = false;
        let isAdmin = false
        const newUserName = username.trim().toLowerCase();

        if (newUserName === message.user) {
          isSentByCurrentUser = true;
        }

        if (message.user === 'admin'){
          isAdmin = true
        }

        return (
          <div key={i} className='all'>
            {isSentByCurrentUser ? (
              <div className="messageContainer justifyEnd">
                <p className="sentText pr-10 userSend">{message.user}</p>
                <div className="messageBox backgroundBlue">
                  <p className="messageText colorWhite">
                    {ReactEmoji.emojify(message.text)}
                  </p>
                  <p className="colorWhite time">{timeAgo.format(message.time)}</p>
                </div>
              </div>
            ) : (
              isAdmin ? (
                <div className='justify-center'>
                <div className="adminMessage">
                  <p className="adminP">
                    {ReactEmoji.emojify(message.text)}
                    <span className='adminUser userAdmin'>{message.user}</span>
                  </p>
                  <p className="adminTime time">{timeAgo.format(message.time)}</p>
                </div>
              </div>
              ) : (
                <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                  <p className="messageText colorDark">
                    {ReactEmoji.emojify(message.text)}
                  </p>
                  <p className="colorDark time">{timeAgo.format(message.time)}</p>
                </div>
                <p className="sentText pl-10 userRecieve">{message.user}</p>
              </div>
              )
            )}
          </div>
        );
      })}
    </ScrollToBottom>
  );
}

export default Messages;
