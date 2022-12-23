//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function Truncate(str, limit) {
  let copyStr = str.slice(0, limit);
  return limit < str.length ? copyStr + "..." : str;
}

console.log(Truncate("Lorem ipsum dolor sit amet. Consciquous lolor amet.", 9));
//Lorem ips...

console.log(Truncate("A quick brown fox jumped over the lazy dog.", 10));
//A quick br...

console.log(Truncate("Bangladesh is a", "Bangladesh is a".length));
//Bangladesh is a

console.log(Truncate("Lorem Ipsum Dolor", "Lorem Ipsum Dolor".length + 2));
//Lorem Ipsum Dolor

/*
 truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....
truncateString("Peter Piper picked a peck of pickled peppers", 11) should return the string Peter Piper....
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the string A-tisket a-tasket A green and yellow basket.
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return the string A-tisket a-tasket A green and yellow basket.
truncateString("A-", 1) should return the string A....
*/
