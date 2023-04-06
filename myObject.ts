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

// - READ Only and optional

type Person = {
  readonly _id: string /* -so if there are properties that you dont want to be modified or example from backend data we put readonly */;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number /* - when there are properties depending on usecase that is applicable only to some but not all, we can make it optional by using ? */;
};

let myUser: Person = {
  _id: "343533",
  name: "h",
  email: "h@com",
  isActive: false,
};

myUser.email = "h@gmail.com";

// -as you notice this gives an error because we set this to readonly
// myUser._id = "adfdasfd";
// -another use case of type

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
