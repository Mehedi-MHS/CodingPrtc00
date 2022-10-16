import React from "react";
import ReactDOM from "react-dom/client";
//React lists- map() with 'keys'. Must use this format
//By me without using extra component

function Grocery() {
  const items = [
    { id: 1, name: "bread" },
    { id: 2, name: "milk" },
    { id: 3, name: "eggs" },
  ];
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Grocery />);
