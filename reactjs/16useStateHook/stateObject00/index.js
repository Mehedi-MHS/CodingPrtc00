//Instead of using multiple state hooks (see multipleState00 folder in codingprtc/reactjs) we
//can use single state with an object.

import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        {" "}
        It is a {car.color} {car.model} from {car.year}.{" "}
      </p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car />);
