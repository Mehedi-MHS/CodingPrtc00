import { useState } from "react";
import Button from "./Button";
import InputContainerStyle from "../assets/css/InputContainerStyle.module.css";
export default function InputContainer({ insertText }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return;
    } //donot add todo if the input field is empty
    insertText(inputValue);
    //clear previous input value
    setInputValue("");
  };

  return (
    <>
      <div className={InputContainerStyle.inputContainer}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo....."
          />
          <Button type="submit" className="primary" value="ADD +" />
        </form>
      </div>
    </>
  );
}
