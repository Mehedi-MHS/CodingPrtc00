//Handling multiple input in form (use name attribute in every input field)- self practice only
import { useState } from "react";

export default function Form() {
  const [inputs, setInputs] = useState({});
  const [output, setOutput] = useState("");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { username, age } = inputs; //destructuring the object
    setOutput(
      <p>
        Hello <strong style={{ color: "green" }}>{username}</strong>. You are{" "}
        <strong style={{ color: "brown" }}>{age}</strong> years old.
      </p>
    ); //Don't use template literals here,it will cause the tags will treat as like string and not work.
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
          placeholder="Enter Your Name here..."
        />
        <br />
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
          placeholder="Enter your age"
        />
        <input type="submit" value="OK" />
      </form>

      <p>{output ? output : "..."}</p>
    </>
  );
}
