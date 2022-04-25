class Student{
  fullname: string;
  constructor(public firstname: string,public lastname: string){
    this.fullname=firstname+" "+lastname;
  }
}

let st1=new Student("John","Doe");
console.log(st1.fullname);
