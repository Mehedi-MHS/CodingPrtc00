import React from "react";
import ReactDOM from "react-dom/client";

//conditionals- write if statement in 2 ways
//option:1-write if statements outside of the JSX code
//NOTE:in order to use javascript inside of JSX, use ccurly braces {}
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myelement = <h1>{text}</h1>;

/*option 2- use ternary expressions instead
 const x=5;
 const myelement=<h1>{(x)<10?"hello":"goodbye"}</h1>;
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myelement);
