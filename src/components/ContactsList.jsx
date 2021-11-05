import React from "react";
import { Link } from "react-router-dom";
import "../cssFolder/Chat.css";

const ContactsList = ({ contactsTodisplay, chatRender, viewImage }) => {
  return (
    <div>
      <h3 style={{ color: "darkslategray" }}>Your contacts</h3>
      {contactsTodisplay.map((contact, index) => {
        return (
          <ul className="contact__listItems1">
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
                <span className="contact_listItems__span ">
                  {contact.name}
                  <p>Available</p>
                </span>
              </Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ContactsList;
