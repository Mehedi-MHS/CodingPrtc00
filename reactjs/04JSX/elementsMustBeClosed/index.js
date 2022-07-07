import React from "react";
import ReactDOM from "react-dom/client";

// Elements must be closed
// Close empty Elements with />

const myelement = <input type="text" />;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myelement);
