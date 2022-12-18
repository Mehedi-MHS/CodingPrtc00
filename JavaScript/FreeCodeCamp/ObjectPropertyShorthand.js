//if property name and value both are same ,then use once to eliminate redundancy

//old method

let getMousePosition = (x, y) => ({
  x: x,
  y: y,
});

//new method
let getMousePosition2 = (x, y) => ({ x, y });

//this new method will convert the object {x,y} into {x:x,y:y}
