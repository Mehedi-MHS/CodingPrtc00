const user = {
  johnDoe: {
    age: 35,
    email: "john@doe.com",
  },
};

const {
  johnDoe: { age, email },
} = user;

console.log(age, email);
//35 john@doe.com
