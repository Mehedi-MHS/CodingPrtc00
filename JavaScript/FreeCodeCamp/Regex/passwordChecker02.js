/*
 * Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
 */

function TestAll(sample, regex) {
  let length = sample.length;
  for (let i = 0; i < length; i++) {
    console.log(sample[i], regex.test(sample[i]));
  }
}

let testCases = [
  "astronaut",
  "banan1",
  "bana12",
  "abc123",
  "12345",
  "8pass99",
  "1a2bcde",
  "astr1aun11t",
];
let regex = /(?=\w{4,})(?=\D+\d{2,})/;
TestAll(testCases, regex);
