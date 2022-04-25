
let arr=["mango","apple","coconut"];

function first(word){
  return word[0];
}

let accronym=arr.map(first); //["m","a","c"]
console.log(accronym.join(""));//"mac"

