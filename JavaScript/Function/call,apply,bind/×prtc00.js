//call,apply,bind method practice by me

let process={
  result:function(score,subject){
   return console.log(`${this.name} has got ${score} in ${subject}`);
  },
  id:function(num,_class){
    return console.log(`${this.name}'s id is ${num} and he reads in class ${_class}`);
  }
  
};

let students={
  one:{ //dont use number (eg:01)
    name:"Student 1",
    result:[75,"Commerce"],
    id:[2021001,10]
  },
  two:{
    name:"Student 2",
    result:[77,"Arts"],
    id:[2021002,11]
  }
};

let obj_length=students.length; //2

let callback=function(x){
  let res=process.result.call(students[x].name).apply(students[x].result);
  let ident=process.id.call(students[x].name).apply(students[x].id);
  return res+"\n"+ident;
};

console.log(Object.entries(students)[1][1])
for(var i=0;i<obj_length;i++){
  var entries=Object.entries(students[0]);
  
}
