//Array,object destructuring prtc by me

//object destructuring
var obj1 = {
  name1: "John",
  age1: 33,
};
var { name1, age1 } = obj1;
console.log(name1, age1); //John 33

//object renaming variable
var obj2 = {
  name2: "John",
  age2: 33,
};
var { name2: userName2 } = obj2;
console.log(userName2); //John

//object default values
var obj3 = {
  name3: "John",
  age3: 33,
};
var { name3: userName3, age3: userAge3, id3: userId3 = 100 } = obj3;
console.log(userName3, userAge3, userId3); //John ,33 ,100

//Object nested destructuring
var obj4 = {
  name4: {
    first: "John",
    last: "Doe",
  },
  age4: 33,
};

var {
  name4: { first: x4, last: y4 },
  age4: z4,
} = obj4;
console.log(x4, y4, z4); //John Doe 33

//array destructuring
var arr1 = [10, 20, 30];
var [a1, b1, c1] = arr1;
console.log(a1, b1, c1); // 10 20 30

//array skipping values
var arr2 = [11, 22, 33];
var [a2, , c2] = arr2;
console.log(a2, c2); //11 33

//array default values
var arr3 = [11, 22];
var [a3, b3, c3 = 44] = arr3;
console.log(a3, b3, c3); //11 22 44

//destructuring function arguments using object
var obj5 = {
  name5: "John",
  age5: 33,
};

function greeting({ name5, age5 }) {
  console.log(`Hello ${name5} , you are ${age5} years old.`);
}

greeting(obj5); // Hello John , you are 33 years old.

//Destructuring function arguments using array
var arr4 = ["John", "Doe"];
function fullName([first, last]) {
  console.log(`Your full name is ${first} ${last}`);
}

fullName(arr4); //Your full name is John Doe

//using spread operator
var arr5 = [10, 20, 30, 40];
var [a5, ...b5] = arr5;
console.log(a5); //10
console.log(b5); // [20 , 30 , 40]
