const users: (string | number)[] = [1, "h"];
// -instead of using like this, we create tuples like this:

let customer: [string, number, boolean] = ["test", 1232, false];

// -remember: we must follow the order in inputting the types, if so it will cause an error

// customer = [false, 344,"fdsd"]
// -example of usecase scenarion

let rgb: [number, number, number];

rgb = [244, 255, 255];

// -another usecase

type User = [number, string];

let newUser: User = [12, "hitest@gm.com"];
newUser[1] = "hc.com";

// newUser.push(false);
// -notice that its not following the type checking

// -this is an issue so to prevent this, when using tuples we either use const or declare your tuple as readonly

export {};
