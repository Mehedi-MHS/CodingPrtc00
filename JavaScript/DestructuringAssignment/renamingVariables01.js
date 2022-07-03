//Renaming variables while destructuring - jsNotesforProfessionals 334 page
/* Destrucuring allows us to refer to one key in an object , but declare it as a variable with a
 * different name. The syntax looks like the key-value syntax for a normal javascript object
 */

let user = {
  name: "John Smith",
  id: "10",
  email: "john@smithh.com",
};

let { name: userName, id: userId } = user;
console.log(userName); //John Smith
console.log(userId); //10
