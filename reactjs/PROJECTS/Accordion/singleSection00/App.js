import React, { useState } from "react";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const accordionData = {
    title: "Section 1",
    content:
      "Lorem ipsum dolor sit a,et, bangladesh is a beautiful country. A quick brown fox jumps ovet the lazy dog. ",
  };

  const { title, content } = accordionData;

  return (
    <>
      <h1> React accordion demo </h1>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div>{title}</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
      </div>
    </>
  );
};

export default App;
