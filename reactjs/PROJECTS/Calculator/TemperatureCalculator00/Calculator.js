import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

export default function Calculator() {
  const [temperature, setTemperature] = useState("");

  function handleChange(event) {
    setTemperature(event.target.value);
  }
  return (
    <>
      <fieldset>
        <legend>Enter celcius temperature</legend>
        <input type="number" onChange={handleChange} />
      </fieldset>
      <BoilingVerdict temperature={temperature} />
    </>
  );
}
