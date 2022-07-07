import React from "react";
import ReactDOM from "react-dom/client";

//onClick event

function Football() {
  const shoot = () => {
    alert("Great shot ! ");
  };

  return <button onClick={shoot}>Take the shot!</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Football />);
