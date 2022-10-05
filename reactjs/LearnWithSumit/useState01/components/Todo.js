import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState("");

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const updatedWarning = inputValue.includes(".js")
      ? "You need Javascript skill to coomplete the task. Do you have it? "
      : null;

    setTodo(inputValue);
    setWarning(updatedWarning);
  };
  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name="todo" value={todo} onChange={handleInput}></textarea>
      </p>
      <hr />
      <h2>{warning || "Good Choice !"}</h2>
    </div>
  );
}

export default Todo;
