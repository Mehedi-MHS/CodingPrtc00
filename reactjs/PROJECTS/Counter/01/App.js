import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((previousCount) => previousCount + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={handleClick}>
        Increment+
      </button>
    </>
  );
};

export default App;
