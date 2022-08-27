//Handling single form- self practice only
import { useState } from "react";

export default function Form() {
  const [formValue, setFormValue] = useState("");
  const handleChange = (e) => {
    setFormValue(e.target.value);
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={formValue}
          onChange={handleChange}
          placeholder="Enter text here"
        />
      </form>

      <p>
        You have entered : <strong>{formValue}.</strong>
      </p>
    </>
  );
}
