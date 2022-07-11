//<select> in React
//A dropdown list,or a select box, in react is also a bit different from HTML
//in HTML,the selected value in the dropdown list was defined with the 'selected' attribute
//In React,the selected value is defined with a 'value' attribute on the 'select' tag

//example: A simple select box,where the selected value 'volvo' is initialized in the constructor.
import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value);
  };
  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat </option>
      </select>
    </form>
  );
}

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);
