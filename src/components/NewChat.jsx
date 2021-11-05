import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { PortalPic, SideOptions } from "./Portal";
import ContactsList from "./ContactsList";

export let contacts;
export let UserId;

const NewChat = ({ friends, user }) => {
  const friendsSorted = friends.sort(function (a, b) {
    return Object.values(a.messages[a.messages.length - 1])[1] <
      Object.values(b.messages[b.messages.length - 1])[1]
      ? 1
      : -1;
  });
  const [profileId, setprofileId] = useState("");
  const [profilePic, setprofilePic] = useState(false);
  const [modalView, setmodalView] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [searchDisplay, setSearchDisplay] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [emptyChat, setEmptyChat] = useState(true);

  const [database] = useState(JSON.parse(localStorage.getItem("database")));
  const [friendsList, setFriendsList] = useState(friends.length);

  const newchatHandler = () => {
    setEmptyChat(false);
    const newContacts = database.filter(
      (contact) => contact.user !== user.user
    );
    setContacts([...newContacts]);
    setFriendsList(newContacts.length);
  };

  const chatRender = (id) => {
    UserId = id;
    localStorage.setItem("id", JSON.stringify(id));
  };

  const viewImage = (pic) => {
    setprofileId(pic);
    setprofilePic(true);
  };
  const displaySearch = () => {
    setSearchDisplay(!searchDisplay);
  };

  const searchOutput = (e) => {
    setSearchQuery(e.target.value);
  };
  const modalOptions = () => {
    setmodalView(!modalView);
  };
  const removeImage = () => {
    setprofileId("");
    setprofilePic(false);
  };

  return (
    <>
      <div>
        <div className="sidebar__header">
          <p>Whatsapp</p>
          <div className="sidebar__headerRight">
            <BsIcons.BsSearch onClick={displaySearch} />
            <AiIcons.AiOutlineBars onClick={modalOptions} />
            {modalView && <SideOptions nodisplay={modalOptions} />}
          </div>
        </div>
        {searchDisplay && (
          <div className="sidebar__search">
            <div className="sidebar__searchContainer">
              <input
                type="text"
                placeholder="Search or start new chat"
                value={searchQuery}
                onChange={searchOutput}
              />
            </div>
          </div>
        )}

        <div className="display__chat">
          {friendsList !== 0 ? (
            <div className="contact__list">
              {contacts.length === 0 ? (
                friendsSorted.map((contact, index) => {
                  return (
                    <>
                      {
                        <ul>
                          <li
                            key={index}
                            className="contact__listItems"
                            onClick={() => chatRender(contact.id)}
                          >
                            <img
                              src={contact.pic}
                              alt=""
                              className="contact_listItems__img"
                              onClick={() => viewImage(contact.pic)}
                            />
                            <Link to={`/chats/:${contact.id}`}>
                              <span className="contact_listItems__span">
                                {contact.name}
                                <div className="contact_listItems__spanTime">
                                  <p>
                                    <BsIcons.BsCheckAll
                                      style={{
                                        marginRight: "5px",
                                        fontSize: "8px",
                                      }}
                                    />
                                    {
                                      Object.values(
                                        contact.messages[
                                          contact.messages.length - 1
                                        ]
                                      )[0]
                                    }
                                  </p>
                                  <p className="last__seen">
                                    {
                                      Object.values(
                                        contact.messages[
                                          contact.messages.length - 1
                                        ]
                                      )[1]
                                    }
                                  </p>
                                </div>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      }
                    </>
                  );
                })
              ) : (
                <ContactsList
                  contactsTodisplay={contacts}
                  chatRender={chatRender}
                  viewImage={viewImage}
                />
              )}
            </div>
          ) : (
            <div className="newchat">
              <p>
                Start a new chat. Click the "+" button to see your contacts{" "}
              </p>
              {emptyChat && (
                <button className="green__round" onClick={newchatHandler}>
                  +
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      {profilePic && <PortalPic pic={profileId} nodisplay={removeImage} />}
    </>
  );
};

export default NewChat;
