//Flatten Higher Dimension array - from JsNotesForProfessionals page:106
//NOTE: This process only works for deeply nested number array. And don't works for deeply
//nestd object

var deeplyNested = [4, [5, 6, [7, 8], 9]];

//process1
console.log(String(deeplyNested).split(",").map(Number));
//[ 4, 5, 6, 7, 8, 9 ]

//process2
console.log(deeplyNested.toString().split(",").map(Number));
//[ 4, 5, 6, 7, 8, 9 ]

/* Self Explaination:
 * deeplyNested.toString(); //4,5,6,7,8,9
 * .split() //converts into array
 * .map(Number) //converts every value into number
 */
