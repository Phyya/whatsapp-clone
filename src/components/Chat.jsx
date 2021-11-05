import React, { useState, useRef, useEffect } from "react";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import MyMessage from "./MyMessage";
import { useHistory } from "react-router-dom";
import "../cssFolder/Chat.css";
import TheirMessage from "./TheirMessage";
import { SideOptions2 } from "./Portal";

export let idFromChat;
const Chat = ({ id, user }) => {
  const [newMessage, setnewMessage] = useState("");
  const [isChatting, setIsChatting] = useState(false);
  const [modalView, setmodalView] = useState(false);
  let history = useHistory();

  //Scrolling to the bottom of the page
  const messageEndRef = useRef(null);
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView();
  };

  const [database] = useState(JSON.parse(localStorage.getItem("database")));
  const [idStored] = useState(JSON.parse(localStorage.getItem("id")));

  const friend = database.find((contact) =>
    idStored ? contact.id === idStored : contact.id === id
  );

  const currentChat = id
    ? JSON.parse(localStorage.getItem(`currentChat--${id}`))
    : JSON.parse(localStorage.getItem(`currentChat--${idStored}`));

  const [messagesObject, setnewmessagesObject] = useState(
    currentChat ? currentChat : [...friend.messages]
  );

  useEffect(() => {
    scrollToBottom();
    return () => {
      localStorage.setItem(
        `currentChat--${id}`,
        JSON.stringify(messagesObject)
      );
    };
  }, [messagesObject, id]);

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current.value !== "") setIsChatting(true);
    inputRef.current.focus();
  }, [isChatting]);

  const handleChange = (e) => {
    setnewMessage(e.target.value);
  };
  const modalOptions = () => {
    setmodalView(!modalView);
  };

  //Sending a Mesage
  const sendMessage = (e) => {
    e.preventDefault();
    setIsChatting(false);
    const date = Date().slice(16, 21);
    const addingNewMine = {
      myMessage: newMessage,
      timestamp: date,
    };
    const addingNewYours = {
      theirMessage: newMessage,
      timestamp: date,
    };

    setnewmessagesObject([...messagesObject, addingNewMine]);
    setnewMessage("");

    //Updating friend's message
    let updatingFriend = friend;
    updatingFriend.messages.push(addingNewYours);

    //Updating user's message
    let updateUser = user;
    updateUser.messages.push(addingNewMine);

    // Updating the database
    const friendIndex = database.findIndex((user) => user.id === friend.id);
    let databaseUpdate = database.map((d, i) =>
      i === friendIndex ? updatingFriend : d
    );
    localStorage.setItem("database", JSON.stringify(databaseUpdate));
  };
  return (
    <div className="chat__flex">
      <div className="chat">
        <div className="chat__header">
          <AiIcons.AiOutlineArrowLeft onClick={history.goBack} />
          <div className="chat__header__chatInfo">
            <img src={friend.pic} alt="" className="profile__pic" />
            <span className="chat__header__chatInfoName">
              <p>{friend.name}</p>
              <p className="small__font">Last seen yesterday at 09:05am</p>
            </span>
          </div>
          <div className="chat__header__chatbuttons">
            <AiIcons.AiFillPhone />
            <BsIcons.BsCameraVideoFill />
            <AiIcons.AiOutlineBars onClick={modalOptions} />
          </div>
          {modalView && <SideOptions2 nodisplay={modalOptions} />}
        </div>
        <div className="chat__body">
          <div className="transparent"></div>
          {messagesObject.length !== 0
            ? messagesObject.map((aMessage, index) => (
                <div key={index}>
                  {aMessage.myMessage ? (
                    <MyMessage
                      message={aMessage.myMessage}
                      timestamp={aMessage.timestamp}
                    />
                  ) : (
                    <TheirMessage
                      message={aMessage.theirMessage}
                      timestamp={aMessage.timestamp}
                    />
                  )}
                </div>
              ))
            : ""}

          <div ref={messageEndRef}></div>
        </div>

        <div className="chat__footer">
          <GrIcons.GrEmoji />
          <form onSubmit={sendMessage}>
            <input
              ref={inputRef}
              onChange={handleChange}
              placeholder="Type a message"
              type="text"
              value={newMessage}
            />
          </form>

          <div className="chat__input__icons">
            {isChatting && (
              <FaIcons.FaTelegramPlane
                onClick={sendMessage}
                className="plane"
              />
            )}
            {!isChatting && (
              <>
                <GrIcons.GrAttachment />
                <AiIcons.AiFillCamera />
                <BiIcons.BiMicrophone />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
