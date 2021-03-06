import {useState} from "react"
import NewChat from "./NewChat";
import "../cssFolder/Sidebar.css";



const Sidebar = ({ user }) => {
const database = JSON.parse(localStorage.getItem("database"))
const [friends, setFriends] = useState(database.filter((user) => user.messages.length !== 0));


  return (
    <div className="sidebar">
      <div className="sidebar__chats">

        <NewChat user={user} friends ={friends} />
      </div>
    </div>
  );
};

export default Sidebar;
