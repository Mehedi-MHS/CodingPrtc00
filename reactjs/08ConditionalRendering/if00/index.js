import React from "react";
import ReactDOM from "react-dom/client";

//React Conditional rendering: if statement
//creating 2 components MissedGoal and MadeGoal

function MissedGoal() {
  return <h1>Missed!</h1>;
}

function MadeGoal() {
  return <h1> Goal! </h1>;
}

//another component to make decition

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Goal isGoal={false} />);
