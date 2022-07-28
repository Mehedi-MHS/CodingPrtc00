//Solution: The solution is to create context. To create context, you must import 'createContext' and initialize it.
//Next we'll use the Context provider to wrap the tree of components that need the state Context.
//In oreder to use the context in a child component,we need to access it using the 'userContext' hook.
//Firtd include the 'userContext' in the import statement.

import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

//initialize
const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3 </h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component5</h1>
      <h2>{`Hello ${user} again !`} </h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component1 />);
