const profileData = {
  name: "John",
  age: 35,
  email: "John@doe.com",
};

//destructure inside function body
function useProfileData1(data) {
  const { name, age, email } = data;
  console.log(name, age, email);
}

//destructure at the place of parameter

function useProfileData2({ name, age, email }) {
  console.log(name, age, email);
}

/*Both does the same job */

useProfileData1(profileData);
useProfileData2(profileData);

//John 35 John@doe.com
//John 35 John@doe.com
