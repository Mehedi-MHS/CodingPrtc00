// delete object.propertyName;

let foods = {
  apple: 25,
  banana: 20,
  cherry: 43,
  dates: 45,
};

delete foods.apple;
console.log(foods);
//{ banana: 20, cherry: 43, dates: 45 }
