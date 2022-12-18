1: Array values are mutable. So, they can be changed even if they are
declared with 'const';

2: const myArray = [["num",1],["num",2]];
myArray[index1][index2];

One way to think of a multi-dimensional array, is as an array of arrays.
When you use brackets to access your array, the first set of brackets refers to the entries in the outermost (the first level:here strings) array,
and each additional pair of brackets refers to the next level of entries inside. (Here second one refers to numbers in the array)
