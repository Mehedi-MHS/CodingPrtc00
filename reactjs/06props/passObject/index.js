import React from "react";
import ReactDOM from "react-dom/client";

//Passing object

function Car(props) {
  return <h2> Hi I am {props.brand.model} ! </h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1> Who lives in my Garage ? </h1>
      <Car brand={carInfo} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);
