/*Containment: (from : reactjs.org)
==============
Some components don’t know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic “boxes”.

We recommend that such components use the special children prop to pass children elements directly into their output:
*/

import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
function FancyBorder(props) {
  return (
    <div className={"FancyBorder bg-" + props.color}>{props.children}</div>
  );
}

//This lets other components pass arbitary children to them by nesting the JSX

function WelcomeDialogue() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialogue-title">Welcome</h1>
      <p className="Dialogue-messege">
        Thank you for visiting our Spacecraft !{" "}
      </p>
    </FancyBorder>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WelcomeDialogue />);

//Anything inside the <FancyBorder> JSX tag gets passed into the FancyBorder component as a children prop. Since FancyBorder renders {props.children} inside a <div>, the passed elements appear in the final output.
