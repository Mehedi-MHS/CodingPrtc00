//deeply destructuring nested objects ( from w3schools reactjs es6 tutotrial )

const vehicleOne = {
  brand: "ford",
  model: "Mustang",
  type: "car",
  registration: {
    city: "Houston",
    state: "Texas",
    country: "USA",
  },
};

myVehicle(vehicleOne);

function myVehicle({ model, registration: { state } }) {
  const messege = "My " + model + " is registered in " + state + " .";
  console.log(messege);
}
// My Mustang is registered in Texas
