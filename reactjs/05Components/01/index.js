import React from "react";
import ReactDOM from "react-dom/client";

//creating a function component and adding it in the root element
function Car() {
  return <h1> Hi, I am a car </h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car />);
