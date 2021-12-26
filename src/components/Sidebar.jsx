import NewChat from "./NewChat";
import "../cssFolder/Sidebar.css";

const Sidebar = ({ user }) => {
  const database = JSON.parse(localStorage.getItem("database"));
  const friendsList = database.filter((user) => user.messages.length !== 0);

  return (
    <div className="sidebar">
      <div className="sidebar__chats">
        <NewChat user={user} friends={friendsList} />
      </div>
    </div>
  );
};

export default Sidebar;
