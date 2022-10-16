import React from "react";
import ReactDOM from "react-dom/client";
//React lists- map() with 'keys'.
//By me  using extra component

function Food(props) {
  return <li> Food name : {props.name} </li>;
}

function Grocery() {
  const items = [
    { id: 1, name: "Milk" },
    { id: 2, name: "Bread" },
    { id: 3, name: "Eggs" },
  ];
  return (
    <>
      <ul>
        {items.map((item) => (
          <Food key={item.id} name={item.name} />
        ))}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Grocery />);
