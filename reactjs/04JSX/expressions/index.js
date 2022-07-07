import React from "react";
import ReactDOM from "react-dom/client";

//JSX expressions must be written inside of {  } bracket

const myelement = <h1> React is {5 + 5} times better with JSX </h1>;
//OUTPUT: React is 10 times better with JSX
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myelement);
