import React, { useState } from "react";
import avatar from "../Images/avatar.jpg";
import { Spinner, ProfilePreview } from "./Portal";
import "../cssFolder/Chat.css";

export let databaseFromProfile;

const Profilepic = (props) => {
  const [pic, setPic] = useState(avatar);
  const [spinner, setSpinner] = useState(false);
  const [imagePreview, setImagePreview] = useState(false);
  const [loggedUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser"))
  );
  const database = JSON.parse(localStorage.getItem("database"));

  const picHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPic(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setPic(e.target.files[0]);
  };

  const uploadPic = () => {
    //Updating local storage
    let loggingPic = loggedUser;
    loggingPic.pic = pic;

    const loggedUserIndex = database.findIndex(
      (user) => user.id === loggedUser.id
    );
    let databaseUpdate = database.map((d, i) =>
      i === loggedUserIndex ? loggingPic : d
    );

    localStorage.setItem("database", JSON.stringify(databaseUpdate));

    databaseFromProfile = JSON.parse(localStorage.getItem("database"));

    setSpinner(true);
    setTimeout(() => {
      props.history.push("/chats");
    }, 3000);
  };

  const viewImage = () => {
    setImagePreview(!imagePreview);
  };
  return (
    <div className="profile__container">
      <div className="gray__header__top"></div>
      <p>Set a profile picture. Let your friends recognize you.</p>
      <div className="profile__span">
        <img className="profile__pic" src={pic} alt="" onClick={viewImage} />
        <input className="profile__name" placeholder="Enter chat name..." />
      </div>
      <input
        className="profile__pic__input"
        type="file"
        onChange={picHandler}
        accept="image/*"
      />
      <button className="upload__button" onClick={uploadPic}>
        Set as profile picture{" "}
      </button>

      <p className="skip__button" onClick={uploadPic}>
        SKIP
      </p>
      {imagePreview && <ProfilePreview pic={pic} nodisplay={viewImage} />}
      {spinner && <Spinner />}
    </div>
  );
};

export default Profilepic;
