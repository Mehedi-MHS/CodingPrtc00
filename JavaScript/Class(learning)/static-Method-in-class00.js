//Static method only workd with main class name.Not with instance name
//ex:01
class Student{
  constructor(name){
    this.studentName=name;
  }
static  sayhello(){
    return console.log(`Good morning`);
  }
}

let st1=new Student("John");

Student.sayhello();//Good morning

st1.sayhello(); //Its showing Error

