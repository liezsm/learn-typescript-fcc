const User = {
  name: "hitesth",
  email: "hitesh@h.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
// exp: this the weird behavior of objects, in the commented code below it gives error but when putting it in varial(newUser) and then put as argument in createUser, it doesn't give error

// -take note: this is a common method begin used

// createUser({ name: "hitesh", isPaid: false, email: "hitesth@com" });
const newUser = { name: "hitesh", isPaid: false, email: "hitesth@com" };
createUser(newUser);

function createCourse(): { name: string; isPaid: boolean } {
  return { name: "reactjs", isPaid: false };
}

export {};
