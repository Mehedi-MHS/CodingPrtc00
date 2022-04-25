//Promises are much like callbacks
//####01
let mypromise = new Promise(function (myresolve,myreject) {
  let x=4;
  if(x==4){
    myresolve("Ok !");
  }else{
    myreject("!Errror");
  }
});

//mypromise.then(function(resolved_value){},function(rejected_error))
mypromise.then(function(value){console.log(value)},function(error){console.log(error)}); //Ok!



//####02 (can use only one parameter)
let mypromise2=new Promise(function(myresolve,myreject){
  setTimeout(function() {
    myresolve("I Lvoe uoyst ");
  }, 3000);
});

mypromise2.then(function(value){
  console.log(value);
}); //wait 3 seconds to see the result
//output: I Lvoe uoyst 



