function getRandom(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}

let b=0;
//looping
let loop=setInterval(function(){
   b++;
  if (b>15){
    clearTimeout(loop);
  }
let a=getRandom(1,6); //gets random number between 1 to 6 (not 6)
console.log(a);
  
},2000);