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

export {};
