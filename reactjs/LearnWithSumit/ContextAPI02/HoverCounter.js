import React from "react";

export default function HoverCounter({ count, incrementCount, theme }) {
  const styleObj =
    theme === "dark" ? { backgroundColor: "#000000", color: "#ffffff" } : null;

  return (
    <>
      <h1 onMouseOver={incrementCount} style={styleObj}>
        {" "}
        Hovered {count} times !
      </h1>
    </>
  );
}
