import { useState } from "react";
import Navbar from "./Navbar";
import InputContainer from "./InputContainer";
import ResultContainer from "./ResultContainer";
export default function Calculation() {
  const [todo, setTodo] = useState([
    { text: "Lorem ipsum", id: 0, isDone: false },
  ]);
  const insertText = (text) => {
    if (text.length < 1) {
      return;
    }
    const newTodo = [...todo];
    setTodo([...newTodo, { text: text, id: todo.length, isDone: false }]);
  };

  const findIndex = (id) => {
    const Copytodo = [...todo],
      length = Copytodo.length;
    var index = null;
    for (var i = 0; i < length; i++) {
      if (Copytodo[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  };

  const checkTodo = (id) => {
    const newTodos = [...todo],
      index = findIndex(id);
    newTodos[index].isDone = true;
    setTodo([...newTodos]);
  };
  const removeTodo = (id) => {
    const index = findIndex(id);
    const Copytodo = [...todo];
    Copytodo.splice(index, 1);
    setTodo(Copytodo);
  };

  const resetTodo = () => {
    if (window.confirm("Are You Sure? \n Reset To Do App.")) {
      setTodo([]);
    }
  };

  return (
    <>
      <Navbar resetTodo={resetTodo} />
      <InputContainer insertText={insertText} />
      <ResultContainer
        todo={todo}
        checkTodo={checkTodo}
        removeTodo={removeTodo}
      />
    </>
  );
}
