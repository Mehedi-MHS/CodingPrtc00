//While this is less common, sometimes you might need multiple “holes” in a component. In such cases you may come up with your own convention instead of using children:
//
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Contacts from "./Contacts";
import Chat from "./Chat";

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

/*React elements like <Contacts /> and <Chat /> are just objects, so you can pass them as props like any other data. This approach may remind you of “slots” in other libraries but there are no limitations on what you can pass as props in React.

*/
