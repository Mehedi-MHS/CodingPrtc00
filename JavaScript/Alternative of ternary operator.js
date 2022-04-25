

//***Using "??" operator***//

let a=null,b="hello";
let c= a??b;
console.log(c); //hello
a="hi";
/*
*Here if we use console.log(c) the result will be "hellbe
*So we have to use c=a??b again.
*/
c=a??b;
console.log(c);//hi


//***Using ternary operator***//

let x=null,y="ternary";
let z= (x!=null) ? x:y;
console.log(z);//ternary


