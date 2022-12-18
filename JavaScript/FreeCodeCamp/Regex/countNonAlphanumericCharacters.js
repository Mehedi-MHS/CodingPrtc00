//String.match(regex).length
// \W is used to match non alphanumeric characters
let length = "Hello ! friend.How are you?".match(/\W/g).length;
//[ ' ', '!', ' ','.', ' ', ' ','?']
console.log(length);
//7

let matches2 = "Hello ! friend.How are you?".match(/\W+/g);
//[ ' ! ', '.', ' ', ' ', '?' ]
console.log(matches2.length);
//5
