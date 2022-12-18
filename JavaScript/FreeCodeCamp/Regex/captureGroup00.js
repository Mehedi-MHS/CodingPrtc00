//Reuse patterns using capture groups
/*
Say you want to match a word that occurs multiple times like below.

let repeatStr = "row row row your boat";
You could use /row row row/, but what if you don't know the specific word repeated? Capture groups can be used to find repeated substrings.

Capture groups are constructed by enclosing the regex pattern to be captured in parentheses. In this case, the goal is to capture a word consisting of alphanumeric characters so the capture group will be \w+ enclosed by parentheses: /(\w+)/.
*/

let repeatStr = "row row row your boat";
let regex = /(\w+) \1 \1/;
console.log(regex.test(repeatStr));
//true
console.log(repeatStr.match(regex));
/*
 [
  'row row row',
  'row',
  index: 0,
  input: 'row row row your boat',
  groups: undefined
]
 */

let regex2 = /(\w+)/;
console.log(regex2.test(repeatStr));
//true
console.log(repeatStr.match(regex2));
/*
 [
  'row',
  'row',
  index: 0,
  input: 'row row row your boat',
  groups: undefined
]
 */
