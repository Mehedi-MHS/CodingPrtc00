//<textarea> in react -
//The textarea element in React is slightly different from ordinary HTML
//In react, the value of a textarea is placd in a value attribute . We'll use the 'useState' Hook to manage the value of the textarea
//in HTML :<textarea>Content of textarea.. </textarea>

import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute "
  );

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  );
}

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);
