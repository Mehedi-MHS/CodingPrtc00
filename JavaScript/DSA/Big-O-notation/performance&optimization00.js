//Time-Complexity--measuring performance
function sumAll1(num){
  var total=0;
  for (let i = 0; i <= num; i++) {
    total+=i;
  }
  return console.log(total);
}

let performance1=performance.now();
sumAll1(100000);
let performance2=performance.now();
console.log(`Performance-func1: ${(performance2-performance1)/1000} second`);




function sumAll2(num){
  var total=num*(num+1)/2;
  return console.log(total);
}

let perfor1=performance.now();
sumAll2(100000);
let perfor2=performance.now();
console.log(`Performance-func1: ${(perfor2-perfor1)/1000} second`);

