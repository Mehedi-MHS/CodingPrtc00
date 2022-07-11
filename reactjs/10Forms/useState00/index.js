import { useState } from "react";
import ReactDOM from "react-dom/client";

//React useState hook to manage the input in form.
function Myform() {
  const [name, setName] = useState("");
  return (
    <form>
      <label>
        Enter your name :
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Myform />);

//Handling forms is about how you handle the data when it changes value or gets submitted
//In HTML, form data is usually handled by the DOM.
//In React, form data is usually handled by the components.
//When the data is handled by the components,all the dat is stored in the component state.
//You can control changes by adding event handlers in the 'onChange' attribute.
//We can use the 'useState' hook to keep track of each inputs value and provide a 'single source of truth' for the entire application.
