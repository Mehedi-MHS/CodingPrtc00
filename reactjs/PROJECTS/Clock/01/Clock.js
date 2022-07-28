//Making simple clock, here useEffect() hook is used instead of componentDidMount()
//and componentWillUnmount() in class component.

import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("bn-BD"));

  useEffect(() => {
    var timerId = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  });

  function tick() {
    setTime(new Date().toLocaleTimeString("bn-BD"));
  }

  return (
    <>
      <h1>{time}</h1>
      <p>Simple Timer</p>
    </>
  );
}

export default Clock;
