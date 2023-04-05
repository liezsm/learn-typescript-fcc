function addTwo(num: number) {
  //   num.toUpperCase();
  return num + 2;
}

addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}

// getUpper(4);
getUpper("hitesth");

function signupUser(name: string, email: string, isPaid: boolean) {}

let user = signupUser("emm", "emm@gm.com", false);

// -example of putting default value

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("h", "h@h.com");

// -better way to write function
// reminder: better way is to put also a type in return as well as the parameter

function getValue(num: number): boolean {
  if (num > 5) {
    return true;
  }

  // return "200 OK"
  return false;
}

// -in arrow function

const getHello = (s: string): string => {
  return "";
};

// const heros = ['ironman', 'spiderman']
const heros = [1, 2, 3];

// -lesson: so typescript also automatically infered the type when also using higher order functions like this

heros.map((hero) => {
  return `hero is ${hero}`;
});
// -functions that doesnt return, put a void as type
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

// -there are functions that never returns a value (void returns nothing)
// -best case uses is when throwing error or teminates execution of program
function handleError(errmsg: string): void {
  throw new Error(errmsg);
}
export {};
