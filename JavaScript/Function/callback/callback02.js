//Callback is very useful for doing multiple stuffs without changing main function.
//In this example we can do anything(eg:sum,alert,console,modifying value etc.) with each of the values of an Array

function process(array,callback){
  var sum=0,
  array_length=array.length;
  for(var i=0;i<array_length;i++){
    callback(array[i]); 
    sum+=array[i];
  }
  return sum;
}

// doing something 1(console.log ) ----way 1
var array=[1,2,3,4,5];
var x=process(array,cons); //here the variable x will contain the sum of the array.
function cons(item){
  console.log(item);
}
console.log(x); //1 ,2 ,3,4,5, 15

//----way2
process(array,function(a){ //Here we havenot assigned the function in a variable. So we cant get the sum of the array
  console.log(a);
}); //1,2,3,4,5

//doing something 2(alert) ----way1
process(array,function(x){
  alert(x);
});

