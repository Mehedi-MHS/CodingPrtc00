let promise1=Promise.resolve("Promise1 resolved"),
promise2 = Promise.resolve("Promise2 resolved");

Promise.all([promise1,promise2])
       .then((arrayOutput)=>console.log(arrayOutput));
       //returns an array