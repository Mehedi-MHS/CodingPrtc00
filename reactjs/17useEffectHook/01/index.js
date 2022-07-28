//useEffect- passing an empty array as dependency-runs only on the first render
//example: Only run the effect on the initial render

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); //An empty brackets here

  return <h1>I've rendered {count} times! </h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer />);
