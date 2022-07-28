//This code is not useful(see next examples 02,03),always clearTimeout,after using setTimeout to decrease memory leaks.
//
//useEffect Hook -example 00 - No dependency passed (runs on every render
//see readme.txt for more details)

//exampleuseEffect, : Use setTimeout() to count 1 second after initial render:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return <h1> I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer />);

/* But wait!! it keeps counting even though it should only count once!
 useEffect runs on every render. That means that when the count changes,a render happens,which then triggers another effect.
 This is not what we want.There are several ways to control when side efects run.
 **We should always include second parameter which accepts an array.We can optionally pass dependencies
 to useEffect in this way*/
