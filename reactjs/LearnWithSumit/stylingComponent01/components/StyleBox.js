import { useState } from "react";
import BoxStyle from "../assets/Box.module.css";
export default function StyleBox() {
  const [randomColor, setRandomColor] = useState("black");
  const changeColor = () => {
    const colors = ["red", "green", "yellow", "blue"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
  };

  return (
    <>
      <h1 style={{ color: randomColor }}>Color Changing Game.</h1>
      <div className={BoxStyle.box1}>
        <div
          className={`${BoxStyle.box2} ${BoxStyle.shadow} whiteBorder`} /* Here white border class is from global class which is already imported in App.js file*/
          style={{ backgroundColor: randomColor }}
        ></div>
      </div>
      <br />
      <button type="button" onClick={() => setRandomColor(changeColor())}>
        Change Box Color
      </button>
      <button type="button" onClick={() => setRandomColor("black")}>
        Reset Box Color
      </button>
    </>
  );
}
