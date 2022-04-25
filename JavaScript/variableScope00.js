function showScope() {
  var scope = "local";
  return scope;
}

var scope = "global";
console.log(scope); //global
console.log(showScope()); //local
console.log(scope); //global
//The showScope function changed the scope variable
