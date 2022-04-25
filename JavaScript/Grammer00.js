let arr=["mango","Apple","Banana"];
let arr_len=arr.length;
let str='';
for(var i=0;i<arr_len;i++){
  var prep=(i==0)?" ":(i==arr_len-1)? " and ":",";
  str+=prep+arr[i];
}
console.log(`I have eaten ${str} `);

//"I have eaten  mango,Apple and Banana "

