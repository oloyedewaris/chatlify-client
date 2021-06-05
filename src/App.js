import React, { useState } from "react";

import Chat from "./screens/Chat/Chat";
import Join from "./screens/Join/Join";

const App = () => {
  const [username, setusername] = useState("");
  const [room, setroom] = useState("");
  const [isAuthenticated, setisAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <Chat
          username={username}
          room={room}
          setisAuthenticated={setisAuthenticated}
        />
      ) : (
        <Join
          username={username}
          setusername={setusername}
          room={room}
          setroom={setroom}
          setisAuthenticated={setisAuthenticated}
        />
      )}
    </div>
  );
};

export default App;
