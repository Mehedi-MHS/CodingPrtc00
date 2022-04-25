/* Doing the same thing done in "asynchronous-sequence-control00.js"
and "sequence-control-promise00.js"
*/

let paymentCompleted = true, score = 90;
//definition (unchanged)
function enroll(){
  console.log("Enrollment in process ...");
  const promise=new Promise(function(resolve,reject){
    setTimeout(function() {
      //using ternary operator
      paymentCompleted?resolve():reject("Payment failed!");
    },2000);
  });
  return promise;
}

function progress(){
  console.log("Course on progress...");
  const promise=new Promise(function(resolve,reject){
    setTimeout(function(){
      score>=80?resolve():reject("Not enough score to get certificate :(");
    },3000);
  });
  return promise;
}

function getCertificate(){
  console.log("Preparing your certificate..");
  const promise=new Promise(function(resolve){
    setTimeout(function() {
      resolve("Congrats ! your certificate is ready");
    },1000);
  });
  return promise;
}

//invocation/execution(new way)
async function course(){
  try{
    await enroll();
    await progress();
    let messege=await getCertificate(); //as getCertificate resolves a messege, assigning it to a variable to print it
    console.log(messege);
  }catch(err){
    console.log(err);
  }
}

course();



