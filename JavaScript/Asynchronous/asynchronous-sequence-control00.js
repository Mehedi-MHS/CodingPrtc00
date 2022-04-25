// Asynchronous control flow using callback //

/*Here we will use an example which is like 
1:enrolling for an online course(it takes some time)
2:Checking payment completed or not(if completed go to next step:)
3:Course progress(it takes some time)
4:if(score>=80) get certificate
*Use setTimeout where it takes some time. setTimeout is by default a asynchronous function.
*/
let paymentSuccess=true,
score=70;
    

function enroll(callback){
  console.log("Enrollment is in process...");
  setTimeout(function() {
    if(paymentSuccess){
      callback();
    }else{
      console.log("Payment failed!");
    }
  },2000);
}

function progress(callback){
  console.log("Course is in progress....");
  setTimeout(function(){
    if(score>=80){
      callback();
    }else{
      console.log('Oops! you cannot get certificate!');
    }
  },3000);
}

function getCertificate(){
  console.log("Getting certificate");
  setTimeout(function(){
    console.log("Certificate ready! Download ");
  },300);
}

//invoking function (invoking means executing)

enroll(function(){
  progress(getCertificate);
});

/*wrong way1: 
enroll(progress);
progress(getCertificate);

wrong way :2
enroll(progress(getCertificate));

it will show wrong output.
*/


