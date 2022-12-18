//Follow these conditions to validate  usernames //
/*
1: Usernames can only use alpha-numeric characters.

2: The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

3: Username letters can be lowercase and uppercase.

4: Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

function validateUserName(arr, regex) {
  let arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    console.log(arr[i], regex.test(arr[i]));
  }
}

const userNames = [
  "Jamesbond07",
  "07James",
  "f",
  55,
  "A1",
  "AA",
  "Bad3UserNam4",
  "A55",
];
const regex = /^[a-z](\d{2,}|[a-z]+)\d*$/i;
//explaination:
//^[a-z]  = first character is alphabet
//(\d{2,}|[a-z]+) = after first alphabet,there will be minimum 2 numbers (to match 'A55') or 1 alphabet (to match 'AA')
//\d*$ = last characters will be digit or nothing(0 or more occurances)

validateUserName(userNames, regex);

/*
 Jamesbond07 true
07James false
f false
55 false
A1 false
AA true
Bad3UserNam4 false
A55 true
*/
