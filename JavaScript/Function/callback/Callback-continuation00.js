/*
*Callback continuation (synchronous and asynchronous)
*Callbacks can be used to provide code to be executed after a method has completed
*/

      //synchronous//
function doSomething(then){
  console.log("Doing Something");
  then();
}

doSomething(function(){
  console.log("Done");
});

console.log("Doing Something else");

//OUTPUT:
//Doing Something
//Done
//Doing Something else


      //Asynchronous//
function doSomethingAsync(then){
  setTimeout(then, 1000); //the parameter (here "then") in the function will be calles after 1 second. 
  console.log("Doing Something Async");
}

doSomethingAsync(function(){
  console.log("Done");
});
console.log("Doing something else");

//OUTPUT:
//Doing Something Async
//Doing Something else
//Done