import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { SideOptions } from "./Portal";
import "../cssFolder/Chat.css";

const Calls = () => {
  const [modalView, setmodalView] = useState(false);
  const modalOptions = () => {
    setmodalView(!modalView);
  };
  return (
    <div className="group">
      <div className="sidebar__header">
        <p>Calls</p>
        <div className="sidebar__headerRight">
          <BsIcons.BsSearch />
          <AiIcons.AiOutlineBars onClick={modalOptions} />
          {modalView && <SideOptions nodisplay={modalOptions} />}
        </div>
      </div>

      <div className="newchat">
        <p> No calls yet. Tap the phone icon to start making calls </p>

        <button className="green__round">
          {" "}
          <AiIcons.AiFillPhone />
        </button>
      </div>
    </div>
  );
};

export default Calls;
