import React, { useState } from "react";
import Modal from "./Modal";
import { modalData } from "./utils/modalData";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <Modal
          title={modalData.title}
          content={modalData.content}
          closeClick={() => setIsOpen(!isOpen)}
        />
      )}
      <button onClick={() => setIsOpen(!isOpen)}>Open Modal </button>
    </>
  );
};

export default App;
