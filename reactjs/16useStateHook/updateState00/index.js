//Update state-using function

import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavouriteColor() {
  const [color, setColor] = useState("Red");
  return (
    <>
      <h1>Color is {color} </h1>
      <button onClick={() => setColor("Green")}>Green</button>
      <button onClick={() => setColor("Orange")}>Orange</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FavouriteColor />);
