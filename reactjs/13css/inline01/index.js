import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <>
      <h1
        style={{
          backgroundColor: "lightblue",
          color: "darkblue",
          padding: "7px",
        }}
      >
        Hello style !
      </h1>
      <p>Add a little style!</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
