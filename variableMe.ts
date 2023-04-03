// -number

let userId: number = 334466;

// userId.toFixed();

console.log(userId);

// -boolean

let isLoggedIn: boolean = false;

// isLoggedIn.valueOf

// -type inference
// -typescript  can automatically infer or detect what you input so it is redundant to put type so it is not a best practice to have like the code above

// -any

let hero;

function getHero() {
  //   return true;
  return "test";
}

hero = getHero();
// -it is not recommened to use any because it just simple means you turned off the typechecking which is the main purpose why we use typescript
