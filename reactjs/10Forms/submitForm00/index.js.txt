import { useState } from "react";
import ReactDOM from "react-dom/client";
//Submitting forms- used useState hook
//You can control the submit action by adding an event handler in the 'onSubmit' attributr for the '<form>'

function Myform() {
  const [name, setName] = useState(""); //array destructuring

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name :
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Myform />);
