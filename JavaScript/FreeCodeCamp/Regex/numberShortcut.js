//  \d is a shortcut of [0-9]
console.log("I have 2 pen and 33 noteBooks".match(/\d/g));
//[ '2', '3', '3' ]

console.log("I have 2 pen and 33 noteBooks".match(/\d+/g)); //matches one or more occurances
//[ '2', '33' ]
