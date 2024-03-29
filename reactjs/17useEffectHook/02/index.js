//Here is an example of a useEffect Hook that is dependent on a variable.
//If the count variable updates,the effect will run again

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); //added the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation} </p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
