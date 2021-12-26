import {useState} from "react"
import NewChat from "./NewChat";
import "../cssFolder/Sidebar.css";



const Sidebar = ({ user }) => {



  return (
    <div className="sidebar">
      <div className="sidebar__chats">

        <NewChat user={user}  />
      </div>
    </div>
  );
};

export default Sidebar;
