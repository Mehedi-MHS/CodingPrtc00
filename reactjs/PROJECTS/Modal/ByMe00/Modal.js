import React from "react";
import "./style.css";

//const Modal = ({ title, content }) => {
const Modal = (props) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="header">
            <div className="title">{props.title}</div>
            <div className="closebtn" onClick={props.closeClick}>
              &times;
            </div>
          </div>
          <div className="body">
            <p>{props.content}</p>
          </div>
          <div className="footer">
            <button className="closebtn2" onClick={props.closeClick}>
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
