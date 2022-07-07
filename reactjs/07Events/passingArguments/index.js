import React from "react";
import ReactDOM from "react-dom/client";

//Passing arguments - to pass an argument to an event handler,use an arrow function
//send 'Goal' as a parameter to the shoot function,using arrow function.

function Football() {
  const shoot = (a) => {
    alert(a);
  };
  return <button onClick={() => shoot("Goal!")}>Take the shot! </button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Football />);
