import React, { useState } from "react";
import Webcam from "react-webcam";
import { Tabs, Tab } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Status from "./Status";
import SwipeableViews from "react-swipeable-views";
import "../cssFolder/Sidebar.css";
import Groups from "./Groups";
import Calls from "./Calls";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

const SwitchTabs = ({ user, database }) => {
  const user1 = user ? user : JSON.parse(localStorage.getItem("loggedUser"));
  const database1 = database
    ? database
    : JSON.parse(localStorage.getItem("database"));

  const contactsStatus = database1.filter((contact) => contact.id !== user1.id);

  const contactsStatusList = contactsStatus.filter(
    (contact) => contact.status.length !== 0
  );

  const [value, setValue] = useState(1);
  const [hideTab, setHideTab] = useState(false);

  const hidetabs = () => {
    setHideTab(!hideTab);
  };

  const switchTab = (e, newValue) => {
    setValue(newValue);
  };

  const swipeTabs = (e, index) => {
    setValue(index);
  };
  return (
    <>
      <SwipeableViews index={value} onSwitching={swipeTabs}>
        <Webcam value={value} index={0} />
        <Sidebar user={user1} value={value} index={1} />
        <Groups value={value} index={2} />
        <Status
          value={value}
          index={3}
          contactsStatus={contactsStatusList}
          user={user1}
          nodisplay={hidetabs}
        />
        <Calls value={value} index={4} />
      </SwipeableViews>
      <Tabs className="footer__sidebar" value={value} onChange={switchTab}>
        <Tab
          label="camera"
          classname="tabs"
          icon={<BsIcons.BsCameraVideoFill style={{ color: "#075e54" }} />}
        ></Tab>
        <Tab
          label="chats"
          classname="tabs"
          icon={<IoIcons.IoMdChatboxes style={{ color: "#075e54" }} />}
        ></Tab>
        <Tab
          label="groups"
          classname="tabs"
          icon={<AiIcons.AiOutlineGroup style={{ color: "#075e54" }} />}
        ></Tab>
        <Tab
          label="status"
          classname="tabs"
          icon={<RiIcons.RiDonutChartFill style={{ color: "#075e54" }} />}
        ></Tab>
        <Tab
          label="calls"
          classname="tabs"
          icon={<AiIcons.AiFillPhone />}
        ></Tab>
      </Tabs>
    </>
  );
};

export default SwitchTabs;
