STYLING REACT USING CSS
--------------------------

Ways;
-inline styling
-css stylesheets
-css modules

Inline Styling;
================
*To style an element with the inline style attribute,the value must be a Javascript Object.
*In JSX,Javascript expressions are written inside curly braces, and since Javascript objects
also use curly braces ,the styling have to be written inside two sets of curly braces {{}}
*camelCased property names: use backgroundColor instead of background-color

Javascript Object
===================
You can also create an object with styling information,and refer to it in the style attribute



CSS Stylesheet
=================
write css in separate .css file and import it in your application


CSS Modules
============
Its another way. CSS modules are convenient for components that are placed in separate files.
*The CSS inside a module is available only for the component that imported it,and you donot
have to worry about name conflicts

**create the CSS module with the '.module.css' extension. example: my-style.module.css







