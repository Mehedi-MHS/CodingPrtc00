//Add start and stop button for clock

import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("bn-BD"));
  const [isStart, setIsStart] = useState(false);

  const handleClick = () => {
    setIsStart(!isStart);
  };

  useEffect(() => {
    let interval = null;
    if (isStart) {
      interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString("bn-BD"));
      });
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStart]);

  return (
    <>
      <h1>{time}</h1>
      <button onClick={handleClick}>{isStart ? "Stop" : "Start"}</button>
    </>
  );
}
