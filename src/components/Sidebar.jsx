import {useEffect, useState} from "react"
import NewChat from "./NewChat";
import "../cssFolder/Sidebar.css";

const database =JSON.parse(localStorage.getItem("database"))


const Sidebar = ({ user }) => {

const [friendsList, setFriendsList] = useState()
useEffect(()=> setFriendsList(database.filter((user) => user.messages.length !== 0))
, [])


  return (
    <div className="sidebar">
      <div className="sidebar__chats">
        <NewChat user={user} friends={friendsList} />
      </div>
    </div>
  );
};

export default Sidebar;
