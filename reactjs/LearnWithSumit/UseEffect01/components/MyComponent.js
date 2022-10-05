import { useState, useEffect } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const tick = () => {
    console.log("Clock ticking");
    setDate(new Date());
  };

  useEffect(() => {
    console.log("Updating document title");
    document.title = `Clicked ${count} times.`;
  }, [count]);

  useEffect(() => {
    console.log("Starting timer");
    const interval = setInterval(tick, 1000);
    //do the cleanup - stop the timer
    //This return function will work as ComponentWillUnmount (runs after any component is removed/disapeared)

    return () => {
      console.log("Component unmounted");
      clearInterval(interval);
    };
  }, []);

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Time {date.toLocaleTimeString()}</p>
      <button type="button" onClick={addClick}>
        Click
      </button>
    </div>
  );
}
