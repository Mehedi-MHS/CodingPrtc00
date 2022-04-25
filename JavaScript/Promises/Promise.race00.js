//returns first resolved promise among all promises

let promise1=new Promise((resolve)=>{
  setTimeout(function() {
    resolve("Promise 1 resolved after 2 seconds");
  },2000);
});

let promise2=Promise.resolve("Promise 2 resolved");

let promise3=new Promise((resolve)=>{
  setTimeout(function() {
    resolve("Promise 3 resolved after 1 seconds");
  },1000);
});

Promise.race([promise1,promise2,promise3])
.then((data)=>console.log(data));


/*OUTPUT:
* Promise 2 resolved
*/
