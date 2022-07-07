import React from "react";
import ReactDOM from "react-dom/client";

// use js like attributes. eg className='' instead of class='' name
const myelement = <h1 className="myclass"> Hello world </h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myelement);
