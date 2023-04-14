# Learning Typescript from Video Tutorial

This repository contains my journey in learning Typescript from the video tutorial ["Typescript Tutorial for Beginners" by FreeCodeCamp.org](https://www.youtube.com/watch?v=30LWjhZzg50). Throughout this journey, I will be documenting my progress, notes, and code samples related to Typescript.

## Table of Contents

- [Why Typescript?](#why-typescript)
- [Getting Started](#getting-started)
- [Progress Log](#progress-log)
- [Code Samples](#code-samples)
- [Resources](#resources)
- [License](#license)

## Why Typescript?

Typescript is a powerful superset of Javascript that adds static typing, making it easier to catch errors early in the development process and provide better documentation for the codebase. It also provides features such as interfaces, classes, and modules, which help to organize and structure code.

As a developer, I am always looking for ways to improve the quality and maintainability of my code, and Typescript provides a great solution for achieving these goals.

## Getting Started

To get started with Typescript, I followed the steps outlined in the video tutorial, which included:

1. Installing Typescript using NPM:

npm install -g typescript

2. Creating a new Typescript project and setting up a development environment using Visual Studio Code.
3. Creating a basic Typescript file and compiling it to Javascript using the `tsc` command.

## Progress Log

I will be documenting my progress in this section, including notes on topics I have learned and challenges I have faced.

### Day 1: Introduction to Typescript

Today, I watched the first few videos of the tutorial, which provided an overview of Typescript and its benefits over Javascript. I learned about data types, variables, functions, and interfaces in Typescript.

### Day 2: Number, Boolean and Type Inference and Any

Today, I continued watching the tutorial and learned about number, boolean in Typescript. We use the documentation to guide along. I have learned that when declaring a simple variable, we dont have to put types because Typescript is smart enough to detect or infer what type it is you inputted. So what I understand is for best practice, it is okay to not use types in cases like this:

```typescript
let isLoggedIn: boolean = false;
```

I also learned about the any keyword. When using any as type, it will just receive any types of variables may it be string, number, boolean or any. It is not recommened to use any because it just simply means you turned off the typechecking which is the main purpose why we use typescript.

### Day 3: Functions

Today, I learned about writing functions in Typescript. I learned that the better way to write functions is to write both the types in parameter as well as the return type.

### Day 4: Object & Array

Today, I learned about how to handle objects and how to use the type aliases for type checking objects. Also we can add the keyword "readonly" for some properties in objects that we don't want to be modified and using "?" in some properties to make it optional, meaning it is not required to have input for this property.

### Day 5: Union

Today, I learned about using union (|) which we used when we declare a variable whom we choose to have more than one type.

I also learned how to declare an array just by simple adding brackets([]) next to the type (string, number, boolean).

### Day 6: Union

Today, I resumed watching the tutorial about unions and learned about how to use it in arrays and can be use in some literal types.

### Day 7: Tuples

Today, I learned about using tuples. It is a special type of array used in typescript that we used declaring the specific type of the certain element in the array.

### Day 8: Enums Interface

Today, I learned about enums and interface. Enums are used when you want to enumerate. Interface are the same with type we can use when declaring objects but the difference is with interface we can declare some functions unlike using type.

## Code Samples

In this section, I will be sharing code samples related to Typescript that I have created during my journey.

```typescript
// A simple Typescript program that logs a message to the console
const message: string = "Hello, Typescript!";
console.log(message);
```

Lessons on Functions:

```typescript
// const heros = ['ironman', 'spiderman']
const heros = [1, 2, 3];

// -lesson: so typescript also automatically infered the type when also using higher order functions like this

heros.map((hero) => {
  return `hero is ${hero}`;
});
```

Objects & Type aliases

```typescript
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

createUserx(newUserx);
```

Day 4 Code samples

```typescript
// - READ Only and optional

type Person = {
  readonly _id: string /* -so if there are properties that you dont want to be modified or example from backend data we put readonly */;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number /* - when there are properties depending on usecase that is applicable only to some but not all, we can make it optional by using ? */;
};
```

Day 5 Code Samples

```typescript
let score: number | string = 33;

score = "44";
```

Day 6 Code samples

```typescript
// example

let seatAllotment: "aisle" | "middle" | "window";

// seatAllotment = "test"
seatAllotment = "aisle";
```

Day 7 Code samples

```typescript
// -example of usecase scenarion

let rgb: [number, number, number];

rgb = [244, 255, 255];

// -another usecase

type User = [number, string];

let newUser: User = [12, "hitest@gm.com"];
```

<!--
```typescript
// Defining a class with properties and methods
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Creating an instance of the Person class and calling its greet method
const john: Person = new Person("John", 30);
john.greet();
``` -->

## Resources

In this section, I will be sharing resources related to Typescript that I have found helpful during my journey.

- "Typescript Tutorial for Beginners" by FreeCodeCamp.org
- Official Typescript Documentation
- [Typescript Handbook](https://www.typescriptlang.org/docs
