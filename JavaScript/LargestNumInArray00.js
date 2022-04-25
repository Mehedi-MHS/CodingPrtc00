var arr=[3,1,5,4,2];
var big=arr[0];
var index=0;
for(var i=1;i<arr.length;i++){
  if(arr[i]>big){
    big=arr[i];
    index=i;
  }
}
console.log('value:'+big+' index:'+index);
//value:5 index:2