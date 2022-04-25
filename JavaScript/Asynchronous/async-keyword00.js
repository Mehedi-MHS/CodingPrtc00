/*async keyword
*it makes the function asynchronous
*returns a promise automatically
*/

//#example:1
function hello(){
  return "hello";
}
console.log(hello()); //hello
//-------///

async function hello(){
  return "hello";
}
console.log(hello()); //Promise{"hello"}

/*------- ------- //
async function hello(){
  return "hello";
}

is equivalent to:

async function hello(){
  return Promise.resolve("hello");
}

*/

async function hello(){
  return Promise.resolve("hello");
}
console.log(hello()); // Promise{"hello"}




