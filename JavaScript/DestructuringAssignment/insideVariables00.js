//Destructuring inside variables -jsNotesforProfessionsals 333 page

const person = {
  name: "John Doe",
  age: 45,
  location: "Paris,France",
};

var { name, age, location } = person;
console.log("I am , " + name + " aged , " + age + " and living in " + location);
//I am , John Doe aged , 45 and living in Paris,France

/* Three nw variables were created : name,age and location and their values
 * were grabbbed from object person id they matched key names
 */
