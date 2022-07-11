import React from "react";
import ReactDOM from "react-dom/client";
//Rect form - 01 - basic , not useful

function Myform() {
  return (
    <form>
      <label>
        {" "}
        Enter your name :
        <input type="text" />
      </label>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Myform />);

//But this is generally not what we want to happen in React
//We want to prevent this default behaviour and let react control the form
