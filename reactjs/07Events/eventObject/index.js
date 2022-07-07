import React from "react";
import ReactDOM from "react-dom/client";

//React event object. we can know which event has been triggered the function.
//In our example the event is the 'click' event

//Arrow Function: Sending the event object manually

function Football() {
  const shoot = (a, b) => {
    alert(b.type); //click
    /*
     * 'b' represents the React event that triggered the function,
     * in this case the 'click' event
     */
  };

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Football />);
