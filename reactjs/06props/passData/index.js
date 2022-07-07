import React from "react";
import ReactDOM from "react-dom/client";
//pass data-props are also how you pass data from one component to another as parameters.
//-send 'brand' property from the Garage component to the Car component

function Car(props) {
  return <h2> I am a {props.brand} ! </h2>;
}

function Garage() {
  return (
    <>
      <h1> Who lives in my Garage ? </h1>
      <Car brand="Ford" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);
