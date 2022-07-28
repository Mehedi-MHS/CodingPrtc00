const oldCar = {
  name: "BMW",
  color: "White",
};

const newCar = { ...oldCar, name: "Tesla" };

console.log(JSON.stringify(newCar));
// {"name":"Tesla","color":"White"}
