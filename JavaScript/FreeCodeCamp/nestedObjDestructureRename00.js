const user = {
  john: {
    age: 35,
    email: "john@doe.com",
  },
};

const {
  john: { age: userAge, email: userEmail },
} = user;

console.log(userAge, userEmail);
//35 john@doe.com
