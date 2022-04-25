function add(n1,n2,callback){
  callback(n1+n2);
  return
}
function show(result){
  console.log(result);
}

add(1,5,show); //6
add(8,5,show); //13

