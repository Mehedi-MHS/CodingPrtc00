
#application of `call`,`apply` and `bind`

1:Both `call` and `apply` invoke a function. Their only difference is that `call` accepts arguments in a comma-separated fashion while `apply` requires arguments to be passed as an array or an array-like object.

2:`Bind` returns a function. 

Again, the only difference between call andapply is that with apply you have to pass arguments as an array. Not doing so will fail with a TypeError.
-----------------
#ex01
function sayHello(greeting) {
  return `${greeting}, ${this.name}`;
}

const user = {
  name: 'Harrison',
};

// using call
console.log(sayHello.call(user, 'Hello')); // prints "Hello, Harrison"

// using apply
console.log(sayHello.apply(user, ['Good morning'])); // prints "Good morning, Harrison"

// using bind
const boundSayHello = sayHello.bind(user, 'Hey there');
console.log(boundSayHello()); // prints "Hey there, Harrison"
         ---------      -------        --------       --------



#ex:02
```````
1)using:call() or Function.prototype.call()

//Demo with javascript .call()

var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

console.log(greeting.call(obj,"Newtown","KOLKATA","WB"));
// returns output as welcome Niladri to Newtown KOLKATA in WB

2)Using apply or Function.prototype.apply()
//Demo with javascript .apply()

var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

// array of arguments to the actual function
var args = ["Newtown","KOLKATA","WB"];  
console.log("Output using .apply() below ")
console.log(greeting.apply(obj,args));

/* The output will be 
  Output using .apply() below
 welcome Niladri to Newtown KOLKATA in WB */
 
 3) bind() or Function.prototype.bind()
 //Use .bind() javascript
 
 var obj = {name:"Niladri"};
 
 var greeting = function(a,b,c){
 return "welcome "+this.name+" to "+a+" "+b+" in "+c;
 };
 
 //creates a bound function that has same body and parameters 
 var bound = greeting.bind(obj); 
 
 
 console.dir(bound); ///returns a function
 
 console.log("Output using .bind() below ");
 
 console.log(bound("Newtown","KOLKATA","WB")); //call the bound function
 
 /* the output will be 
 Output using .bind() below
 welcome Niladri to Newtown KOLKATA in WB */
