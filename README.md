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

Today, I learned about writing functions in Typescript.

## Code Samples

In this section, I will be sharing code samples related to Typescript that I have created during my journey.

```typescript
// A simple Typescript program that logs a message to the console
const message: string = "Hello, Typescript!";
console.log(message);
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
