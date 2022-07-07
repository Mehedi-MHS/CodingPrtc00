import React from "react";
import ReactDOM from "react-dom/client";

//The HTML code must be wrapped in one top level element
//so if you like to write two paragraphs , you must put them inside a parent element
//like <div> </div> or empty <> </>

const myelement = (
  <div>
    <p> I am paragraph 1 </p>
    <p> I am paragraph 2 </p>
  </div>
);

/* or
 const myelement=(
    <>
      <p> I am paragraph 1 </p>
      <p> I am paragraph 2 </p>
    </>
);
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myelement);
