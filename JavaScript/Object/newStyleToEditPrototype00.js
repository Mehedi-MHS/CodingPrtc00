function Fruit(){}

Fruit.prototype={
  name:function(name){
    return `Fruit name is: ${name}`;
  },
  getPrice:function(){
    return `Its 100 taka only`;
  }
}

var mango=new Fruit();
console.log(mango.name("Mango")); //Fruit name is: Mango