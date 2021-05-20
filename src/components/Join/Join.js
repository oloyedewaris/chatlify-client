import React from "react";
import "./Join.css";

function Join({ username, setusername, room, setroom, setisAuthenticated }) {
  const buttonHandler = () => {
    if (username && room) {
      setisAuthenticated(true);
    }
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Let's Chat</h1>
        <div>
          <input
            className="joinInput"
            placeholder="Username"
            type="text"
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div>
          <input
            className="joinInput mt-20"
            placeholder="Room"
            type="text"
            onChange={(e) => setroom(e.target.value)}
          />
        </div>
        <button onClick={buttonHandler} className="button mt-20" type="submit">
          Join
        </button>
      </div>
    </div>
  );
}

export default Join;
