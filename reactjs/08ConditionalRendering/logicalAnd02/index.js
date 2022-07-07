import React from "react";
import ReactDOM from "react-dom/client";

//conditional rendering using logical && operator 02

function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && <h2> You have {cars.length} cars in your garage.</h2>}
    </>
  );
}

const cars = []; //leaving the array empty.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage cars={cars} />);
