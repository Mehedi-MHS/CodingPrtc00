/* Doing same thing of asynchronous-sequence-control00.js */
//NOTE:If you use promise inside a function,always return it
let paymentCompleted = true,
score = 90;  //test the code by changing the variable values
//Promise/function definition(producing code)
function enroll() {
  console.log("Course enrollment is in process...");
  const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (paymentCompleted) {
        resolve();
      } else {
        reject("Payment failed !");
      }
    },
      2000);
  });
  return promise;
}

function progress() {
  console.log("Course on progress ...");
  const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
      if(score>=80){
        resolve();
      }else{
        reject("You could not get enough result to get the certificate");
      }
    },3000);
  });
  return promise;
}

function getCertificate(){
  console.log("Processing certificate...");
  const promise= new Promise(function(resolve){
    setTimeout(function(){
      resolve("Congrats! you got a certificate.");
    },1000);
  });
  return promise;
}

//Promise / function invocation/execution (consuming code)

enroll()
  .then(progress)
  .then(getCertificate)
  .then(function(value){
    console.log(value);
  })
  .catch(function(err){ 
    console.log(err);
  });
  
  //use catch only once in promise.
