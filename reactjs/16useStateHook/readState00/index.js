//import it at the top of the function component to initialize it.
import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavouriteColor() {
  const [color, setColor] = useState("Red");
  return <h1>Color is {color} </h1>; //read state using variable , here color variable
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FavouriteColor />);
