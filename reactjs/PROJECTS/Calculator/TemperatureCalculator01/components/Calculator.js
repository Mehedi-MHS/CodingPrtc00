import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import { toCelcius, toFahrenheight, convert } from "../libs/Converter";

export default function Calculator() {
  const [temperature, setTemperature] = useState({ value: "", scale: "c" });

  const onTemperatureChange = (e, scale) => {
    setTemperature({ value: e.target.value, scale: scale });
  };

  const NumberValue = Math.round(temperature.value);
  const celcius =
    temperature.scale === "f" ? convert(NumberValue, toCelcius) : NumberValue;
  const fahrenheight =
    temperature.scale === "c"
      ? convert(NumberValue, toFahrenheight)
      : NumberValue;
  return (
    <>
      <TemperatureInput
        scale="c"
        temperature={celcius}
        onTemperatureChange={onTemperatureChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheight}
        onTemperatureChange={onTemperatureChange}
      />
    </>
  );
}
