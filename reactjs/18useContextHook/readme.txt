React useContext Hook
==================================

- React context is a way to manage state globally. It can be used together with the 'useState' Hook to share state between
deeply nested components more easily than with 'useState' alone.

- The problem with 'useContext':
-----------------------------------
State should be held by the highest parent component in the stack that requires access to the state.

To illustrate,we have many nested components.The component at the top and bottom of the stack need access to the state.

To do this without Context, we will need to pass the state as 'props' through each nested component. This is called props drilling.

example:without using useContext hook.
----------------------------------------
//even though, components 2-4 did not need the state,they had to pass the state
//along so that it could reach component 5.

import { useState } from "react";
import ReactDOM from "react-dom/client";

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`} </h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3 </h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h1>Component5</h1>
      <h2>{`Hello ${user} again !`} </h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component1 />);




Solution:example
-----------------
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

