//React 'useState' Hook example

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FavouriteColor() {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1> My Favourite color is {color}! </h1>
      <button type="buton" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red{" "}
      </button>
      <button type="button" onClick={() => setColor("pink")}>
        Pink{" "}
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green{" "}
      </button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FavouriteColor />);
