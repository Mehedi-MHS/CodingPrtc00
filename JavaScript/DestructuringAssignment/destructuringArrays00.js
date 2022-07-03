//Destructuring arrays - jsNotesForProfessionals 333 page

const myarr = ["one", "two", "three"];
const [a, b, c] = myarr;
console.log(a, b, c); //one two three

//swapping values using Destructuring array
var x = 1;
var y = 3;
[x, y] = [y, x];
console.log(x, y); //3 1

//we can specify empty slots to skip unneeded values
var [d, , f] = [1, 2, 3];
console.log(d, f); //1 3
