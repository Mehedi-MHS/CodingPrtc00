import React from "react";
import ReactDOM from "react-dom/client";

//components can e passed as props. Props are like function arguments and you
//send them into the component as attributes

function Car(props) {
  return <h2> I am a {props.color} car ! </h2>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car color="red" />);
