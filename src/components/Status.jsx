import React, { useState } from "react";
import "../cssFolder/status.css";
import * as AiIcons from "react-icons/ai";
import Stories from "react-insta-stories";

const Status = ({ contactsStatus, user, nodisplay }) => {
  const database = JSON.parse(localStorage.getItem("database"));
  const userStatus1 = user.status.length === 0 ? null : user.status;
  const [userStatus, setUserStatus] = useState(userStatus1);

  const [userStatusClick, setUserStatusClick] = useState(
    user.status.length !== 0
  );
  const [userStatusView, setUserStatusView] = useState(false);
  const [time, setTime] = useState("1 min ago");

  const [contactStatus, setContactStatus] = useState(null);
  const [contactStatusView, setContactStatusView] = useState(false);

  const styles = {
    width: "auto",
    maxHeight: "100%",
    maxWidth: "100%",
    marginTop: "0",
    marginLeft: "70%",
    // marginRight:"auto",
  };

  const addStatus = (e) => {
    console.log(e.target.files[0]);
    const newStatus = {
      url: e.target.files[0],
      header: {
        heading: user.name,
        subheading: time,
        profileImage: user.pic,
      },
    };
    setUserStatusClick(true);
    if (userStatus) {
      setUserStatus([...userStatus, newStatus]);
    } else {
      setUserStatus(newStatus);
    }

    //Updating local storage
    let userStatusUpdate = user;
    user.status = userStatus;

    const userIndex = database.findIndex((contact) => contact.id === user.id);
    let databaseUpdate = database.map((d, i) =>
      i === userIndex ? userStatusUpdate : d
    );

    localStorage.setItem("database", JSON.stringify(databaseUpdate));
  };
  const checkStatus = () => {
    if (userStatusClick) {
      setUserStatusView(true);
      nodisplay();
    }
  };
  const checkContactStatus = (status) => {
    setContactStatusView(true);
    setContactStatus(status);
    nodisplay();
  };
  const hideStatus = () => {
    setContactStatusView(!contactStatusView);
    console.log(contactStatus);
    setUserStatusView(true);
  };

  return (
    <div className="status__flex">
      <div className="whole_status">
        <div className={contactStatusView ? "status__display" : "hidden"}>
          <AiIcons.AiOutlineArrowLeft
            className="white__arrow"
            onClick={hideStatus}
          />
          {contactStatusView && (
            <Stories
              stories={contactStatus}
              defaultInterval={3000}
              width={500}
              height={500}
              storyStyles={styles}
            />
          )}
        </div>
        <div className="status__container">
          {/* <div className = "overlay" onClick={hideStatus}></div> */}

          <div className="my__status">
            <img alt="" src={user.pic} className="a__status mine" />
            <AiIcons.AiFillPlusSquare className="plus__status" />
            <div onClick={checkStatus} className="status__div">
              {!userStatusClick ? (
                <div>
                  <input
                    className="input__status"
                    type="file"
                    accept="image/*"
                    id="file"
                    onChange={addStatus}
                  />
                  <label for="file" id="file">
                    <p>My status</p>
                    <p>Tap to add a new status update</p>
                  </label>
                </div>
              ) : (
                <div>
                  <span>
                    <p>My status</p>
                    <p>Posted {time}</p>
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="recent__status">Recent updates</div>
          <div className="contacts__status">
            {/* {contactsStatus.map((contact) => {
            return (
              <ul>
                <li
                  key={contact.id}
                  className="status__list"
                  onClick={() => checkContactStatus(contact.status)}
                >
                  <img alt="" src={contact.pic} className="a__status" />
                  <span className="status__span">
                    <p>{contact.name}</p>
                    <p classname="status__time">{contact.time}</p>
                  </span>
                </li>
              </ul>
            );
          })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
