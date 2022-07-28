import React from "react";
import ReactDOM from "react-dom/client";
import FancyBorder from "./FancyBorder";
import "./style.css";

function Dialogue(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="dialogue-title">{props.title}</h1>
      <p className="dialogue-messege">{props.messege}</p>
    </FancyBorder>
  );
}

function WelcomeDialogue() {
  return (
    <Dialogue
      title="Welcome"
      messege="Thank you for visiting our spacecraft !"
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WelcomeDialogue />);
