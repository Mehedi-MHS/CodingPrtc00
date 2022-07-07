import React from "react";
import ReactDOM from "react-dom/client";

//use () to insert large block of HTML

const myelement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myelement);
