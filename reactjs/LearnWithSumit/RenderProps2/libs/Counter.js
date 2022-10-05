import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const { render } = props;
  return render(count, incrementCount);
}

export default Counter;
