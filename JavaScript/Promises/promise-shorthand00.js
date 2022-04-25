//if there is no reject, use this shorthand method
let promise1=Promise.resolve("Promise1 resolved");

let promise2=new Promise(function(resolve){
  resolve("Promise 2 resolved");
});

promise1
   .then(function(data){
     console.log(data);
   });
  // .catch(function(err){   //as there is no reject,skip this
  // console.log(err);
  // })
  
  promise2
     .then((data)=>console.log(data));
   
   
