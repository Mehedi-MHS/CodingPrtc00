//Using Getter setter method is called encapsulation
//Use Object.defineProperty() to use getter setter

function Student(name,marks){
  //use "var" to make these properties private
  var st_name=name;
  var st_marks=marks;
  Object.defineProperty(this,"name",{
    get:function(){ //getter
      return st_name;
    },
    set:function(st_name){
      this.st_name=st_name;
    }
  });
  
  Object.defineProperty(this,"marks",{
    get:function(){
      return st_marks;
    },
    set:function(st_marks){
      this.st_marks=st_marks;
    }
  });
}

let st1=new Student("John",80);
console.log(st1.name+" "+st1.marks); // John 80
st1.name("Doe");
console.log(st1.name);


