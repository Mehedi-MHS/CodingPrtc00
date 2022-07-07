import React from "react";
import ReactDOM from "react-dom/client";

// Components in components (nested components)
// we will use the car component inside garage component

function Car() {
  return <h2>I am a car </h2>;
}

function Garage() {
  return (
    <>
      <h1> Who lives in my garage ? </h1>
      <Car />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);
