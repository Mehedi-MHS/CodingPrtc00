//use '*' asterisk character to match zero or more occurances of characters
//"goooooove".match(/go*/g); matches

console.log("goooooove".match(/go*/g));
//[ 'goooooo' ]
console.log("gle flu".match(/go*/g));
//[ 'g' ]
console.log("anc djfufio".match(/go*/g));
//null
console.log("Aaaaaaaa798hf".match(/Aa*/g));
//[ 'Aaaaaaaa' ]
