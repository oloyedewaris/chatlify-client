import React, { useState } from "react";
import Collapse from "react-collapsible";
import {
  CaretUpOutlined,
  CaretRightOutlined,
  CloseOutlined
} from "@ant-design/icons";
import "./InfoBar.css";

function InfoBar(props) {
  const [Open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!Open);
  };

  return (
    <div className="infoBar">
      <Collapse
        className="collapse"
        trigger={
          <p className="members" onClick={() => toggle()}>
            Members
            {Open ? (
              <CaretUpOutlined
                style={{ marginTop: "4px", marginLeft: "4px", width: "15px" }}
              />
            ) : (
              <CaretRightOutlined
                style={{ marginTop: "4px", marginLeft: "4px", width: "15px" }}
              />
            )}
          </p>
        }
        triggerStyle={{
          color: "white"
        }}
      >
        <ul className="collapseList">
          {props.roomInfo.users &&
            props.roomInfo.users.map((member, i) => (
              <li key={i}>{member.username}</li>
            ))}
        </ul>
      </Collapse>
      <div className="leftInnerContainer">
        <h3 className="roomname">{props.room.trim().toUpperCase()}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <CloseOutlined />
        </a>
      </div>
    </div>
  );
}

export default InfoBar;
