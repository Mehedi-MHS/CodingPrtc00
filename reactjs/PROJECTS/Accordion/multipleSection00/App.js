import React from "react";
import Accordion from "./Accordion";

const App = () => {
  const accordionData = [
    {
      title: "Section 1",
      content:
        "Lorem ipsum do;or dit amet. america is a beautiful country. A quick brown fox jumps over the lazy dog.",
    },
    {
      title: "Section 2",
      content:
        "Lorem ipsum do;or dit amet. america is a beautiful country. A quick brown fox jumps over the lazy dog.",
    },
    {
      title: "Section 3",
      content:
        "Lorem ipsum do;or dit amet. america is a beautiful country. A quick brown fox jumps over the lazy dog.",
    },
  ];

  return (
    <>
      <h1> React Accordion Demo </h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </>
  );
};

export default App;
