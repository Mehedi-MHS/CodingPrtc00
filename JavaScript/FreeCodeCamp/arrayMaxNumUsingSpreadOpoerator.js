//general method
const arr = [11, 42, 36, 82];
const max = Math.max.apply(null, arr);
console.log(max);
//82
//Math.max(arr) will return NaN because it takes comma separated values.This can be done using apply or
//using spread operator
const arr2 = [21, 41, 65, 88];
const max2 = Math.max(...arr2);
console.log(max2);
//88
