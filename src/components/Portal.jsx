import React from "react";
import ReactDom from "react-dom";
import "../cssFolder/Portals.css";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";

export const Portal = ({ notification, nodisplay }) => {
  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={nodisplay}></div>
      <div className="modal">
        <AiIcons.AiFillCloseCircle
          className="close__icon"
          onClick={nodisplay}
        />
        <p className="modal__paragraph">{notification}</p>
      </div>
    </>,
    document.getElementById("portal-root")
  );
};
export const Spinner = () => {
  return ReactDom.createPortal(
    <div className="modal">
      <div className="modal__spinner full__height"></div>
    </div>,
    document.getElementById("portal-root")
  );
};
export const Onboard = ({ nodisplay }) => {
  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={nodisplay}></div>
      <div className="modal">
        <p>
          Whatsapp needs permisson to access your contacts, camera and
          microphone.
        </p>
        <div className="modal__onboarding">
          <button onClick={nodisplay}>DENY </button>
          <button onClick={nodisplay}>ALLOW </button>
        </div>
      </div>
    </>,
    document.getElementById("portal-root")
  );
};

export const ProfilePreview = ({ pic, nodisplay }) => {
  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={nodisplay}></div>
      <div className="modal__pic">
        <div className="gray__header"></div>
        <img src={pic} alt="" />
        <div className="gray__header"></div>
      </div>
    </>,
    document.getElementById("portal-root")
  );
};

export const PortalPic = ({ pic, nodisplay }) => {
  console.log(pic);
  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={nodisplay}></div>
      <div className="modal__pic">
        <img src={pic} alt="" />
        <div className="modal__pic__icons">
          <IoIcons.IoMdChatboxes className="modal__pic__icon1" />
          <AiIcons.AiFillPhone className="modal__pic__icon1" />
          <BsIcons.BsCameraVideoFill className="modal__pic__icon1" />
          <FiIcons.FiAlertCircle className="modal__pic__icon1" />
        </div>
      </div>
    </>,
    document.getElementById("portal-root")
  );
};
export const SideOptions = ({ nodisplay }) => {
  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={nodisplay}></div>
      <div className="modal__sideOption">
        <ul className="list__item__sidebar">
          <li className="list__item"> New Group</li>
          <li className="list__item"> New Broadcast</li>
          <li className="list__item"> Message a number</li>
          <li className="list__item"> Whatsapp web</li>
          <li className="list__item"> Starred messages</li>
          <li className="list__item"> Settings</li>
        </ul>
      </div>
    </>,
    document.getElementById("portal-root")
  );
};

export const SideOptions2 = ({ nodisplay }) => {
  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={nodisplay}></div>
      <div className="modal__sideOption__chat">
        <ul className="list__item__chat">
          <li className="list__item"> View Contact</li>
          <li className="list__item">Media, links and docs</li>
          <li className="list__item"> Search</li>
          <li className="list__item"> Wallpaper</li>
          <li className="list__item"> Go to First Message</li>
          <li className="list__item"> Clear chat</li>
        </ul>
      </div>
    </>,
    document.getElementById("portal-root")
  );
};
// export const StatusView = ({content, nodisplay}) => {
//     const checkType = content.split('.')
//     const checkTypeExtension = ""
//     return ReactDom.createPortal(
//         <>
//         <div className="overlay" onClick={nodisplay}></div>
//         <div className="modal__status">
//             {

//             }
//         </div>
//         </>,
//         document.getElementById("portal-root")
//     )
// }
