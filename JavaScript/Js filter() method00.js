  //getting negative numbers using fileter
let arr=[5,-3,3,-1,7,-8,3,5,-9];
let filtered=arr.filter(function(num){
  return num<0;
});
console.log(filtered);// [-3,-1,-8,-9]