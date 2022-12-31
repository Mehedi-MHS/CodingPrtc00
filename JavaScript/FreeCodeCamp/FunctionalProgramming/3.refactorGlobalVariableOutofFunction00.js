//Global variable
let bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

function add(bookList, bookName) {
  //create a copy of Global variable bookList
  let newList = [...bookList];

  newList.push(bookName);
  return newList;
}

function remove(bookList, bookName) {
  let newList = [...bookList];
  let book_index = newList.indexOf(bookName);
  newList.splice(book_index, 1);
  return newList;
}

//TEST:
console.log(add(bookList, "A Brief History of Time"));
/*
[
  'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae',
  'A Brief History of Time'
] 
 */
console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));
/*
[
  'The Hound of the Baskervilles',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae'
] */

console.log(
  remove(
    add(bookList, "A Brief History of Time"),
    "On The Electrodynamics of Moving Bodies"
  )
);

/*
 [
  'The Hound of the Baskervilles',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae',
  'A Brief History of Time'
]
 */
