import React from "react";
import ReactDOM from "react-dom/client";

//conditional rendering - ternary operator

function Madegoal() {
  return <h1>Goal !</h1>;
}

function Missedgoal() {
  return <h1> Missed Goal ! </h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  return <>{isGoal ? <Madegoal /> : <Missedgoal />}</>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Goal isGoal={true} />);
