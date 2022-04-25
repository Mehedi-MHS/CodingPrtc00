/*
*It doesnot matter how many callbacks are used.
*Because only one function is called
*/

///Here we will check Number

function checkNum(num,success,failure){
  if(typeof num === "number"){
    success();
  }else{
    failure();
  }
}

function successMessage(){
  console.log("Valid Number");
}
function errorMessage(){
  console.log("Error!! its not a number");
}

checkNum(115,successMessage,errorMessage); //Valid number
checkNum("abc",successMessage,errorMessage); // Error!! its not a number





//way 2
function checknum2(input,success,failure){
  if (typeof input === "number") {
    success("Valid number!!");
  }else{
    failure("Invalid number");
  }
}

checknum2(12,(x)=>{console.log(x)},(y)=>{console.log(y)}); //Valid number!!
checknum2(true,(x)=>{console.log(x)},(y)=>{console.log(y)}); //Invalid number!!


//way 3
function checkNum3(val,success,failure){
  if(typeof val === "number"){
    success("Valid Number");
  }else{
    failure("Error!! Not a number");
  }
}

function successMessage(s){
  console.log(s);
}
function errorMessage(e){
  console.log(e);
}

checkNum3(33,successMessage,errorMessage); //Valid number
checkNum3(true,successMessage,errorMessage); //Error!! Not a number

