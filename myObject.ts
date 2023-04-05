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

// -Instead of the above, the better way when passing objects is like this:
// -using type

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUserx(user: User) {}

const newUserx = {
  name: "hitesh",
  email: "hites@com",
  isActive: false,
};
const newUserxx = {
  name: "hitesh",
  email: "hites@com",
  isActive: false,
  isPaid: true,
};

createUserx(newUserx);

// -this doesn't give error so to avoid, put also the type in declaring the new inputs (const newUserxx: User)
createUserx(newUserxx);

// createUserx({name: "test", email: "tes@com", isActive: true, isPaid: false})
export {};
