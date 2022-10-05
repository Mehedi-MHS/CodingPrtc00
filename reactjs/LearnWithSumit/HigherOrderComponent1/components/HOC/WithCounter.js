import React, { useState } from "react";

const WithCounter = (OriginalComponent) => {
  function NewComponent() {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount((prevState) => prevState + 1);
    };
    return (
      <>
        <OriginalComponent count={count} increment={increment} />
      </>
    );
  }

  return NewComponent;
};

export default WithCounter;
