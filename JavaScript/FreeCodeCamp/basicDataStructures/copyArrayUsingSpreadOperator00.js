// Spread operator (...) is used to copy the whole array
// The main array remains unchanged

let array1 = [true, false, 1, 2, 3, 4, 5, "string", undefined];

let array2 = [...array1];

console.log(array2);

//[ true, false, 1, 2, 3, 4, 5, 'string', undefined ]
