class Person{
  fullname: string;
  constructor(public firstname: string,public lastname: string){
    this.fullname=firstname+" "+lastname;
  }
}

class Student extends Person{
  constructor(public firstname: string,public lastname: string,public roll: number){
    super(firstname,lastname);
    this.roll=roll;
  }
  greeting(): string{
    return `Hello i am ${this.firstname}.My roll no: ${this.roll}`;
  }
}

let st1=new Student("Jihn","Doe",1000);
console.log(st1.greeting);