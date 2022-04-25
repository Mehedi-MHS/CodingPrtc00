//callback is much like return..-my concept
function add(num1,num2,callback){
  var total=num1+num2;
  callback(total);
  return
}

add(2,4,function(a){
  console.log(a);//a==result //6
});

/*
*There is no need to assign it in a variable
*
var x=add(2,4,function(a){
  console.log(a);//a==result //6
});
console.log(x);//undefined
*
*/
//////////////////
add(5,6,function(total){
  console.log(total);//11
});

///////////////
add(4,5,show);
function show(total){
  console.log(total); //9
}