import React from "react";
import ReactDOM from "react-dom/client";
//Props 01
function Car(props) {
  return <h1> Hello I am {props.brand} !</h1>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car brand="Ford" />);
