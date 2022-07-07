import React from "react";
import ReactDOM from "react-dom/client";
//React lists- map() is used for this

function Car(props) {
  return <li> I am a {props.brand} </li>;
}

function Garage() {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <>
      <h1>Who lives in my garage? </h1>
      <ul>
        {cars.map((car) => (
          <Car brand={car} />
        ))}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);

//It will work but you will receive an warning that there is no 'key' provided for the list items
//Keys allow React to keep track of elements.This way, if an item is updated or removed , only that item will be re-rendered instad
//of the entire list.
//Keys need to be unique to each sibling but they can be duplicated globally.
//**see the next 'key' folder and follow that coding style
