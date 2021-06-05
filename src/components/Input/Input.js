import React from "react";
import "./Input.css";
import SendOutlined from "@ant-design/icons/SendOutlined";

function Input({ currMessage, setcurrMessage, sendMessage }) {
  return (
    <div>
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Type a message"
          value={currMessage}
          onChange={(e) => setcurrMessage(e.currentTarget.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
        <button className="sendButton" onClick={(e) => sendMessage(e)}>
          <SendOutlined fontSize="medium"/>
        </button>
      </form>
    </div>
  );
}

export default Input;
