import React from "react";
import ReactDOM from "react-dom/client";
//Variable-if you have a variable to send , and not a string , you just put the variable name inside the curly brackets {}

function Car(props) {
  return <h2> I am a {props.brand} ! </h2>;
}

function Garage() {
  const carName = "Ford";
  return (
    <>
      <h1> Who lives in my garage ? </h1>
      <Car brand={carName} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);
