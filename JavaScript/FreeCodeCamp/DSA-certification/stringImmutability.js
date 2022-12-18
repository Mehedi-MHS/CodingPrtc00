let str = "Hello";
//you cannot change the first letter of str from 'H' to 'J' using
//str[0]='J';
//It will throw an error
//To change str,the only way is to reassign a new value
//str = "Jello"
str[0] = "J";
console.log(str); //Hello
str = "Jello";
console.log(str); //Jello
