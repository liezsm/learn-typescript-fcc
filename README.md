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

Interface vs Type

Types and interface are alike in many ways but the difference is interface can be reopened and can add new properties while type, we cannot. So interface is extendable while type is not.

### Day 9: Setting up a project

Today, I learned how to setup a project when using typescript. We have to initialized the ts config file and modify it according the settings we want for our project.

### Day 10: Classes

Today, I learned classes and how to create one. In classes we use the constructor and we can declare  a variable either public or private. Private are only accessible inside the class. We can also use the readonly keyword we have learned in the past lesson.

### Day 11: Getters and Setters

Today, I learned creating getters and setters inside the classes. Getters should have a return type while setters don't have to put a return type (even void).

### Day 12: Protected keyword

Today, I learned about another reserved keyword which is protected. It is one of the accesss modifier keyword(together with private, public, readonly). In my undestanding, we can use protected keyword if we want the variable or function to be inherited from the parent's class to its children (through extending).

### Day 12:  Why interface is important

Today, I learned about using interface as a guide when creating a class.

### Day 13:  Generics

Today, I learned about using generics. It is one of the reusability feature in typescript wherein you can put any type inside the brackets (<T>) and this is the common and best practice way when using generics.

### Day 14:  Abstract class

Today, I learned about abstract class. It is almost the same with interface but there are some few difference. For example when used in another class we use the extends keyword while in interface we use the implements keyword.

### Day 15:  Generics in arrays and arrow function

Today, I learned about using generics in a function when dealing with arrays.

### Day 16:  Generics classes

Today, I learned about using generics in classes and extending it.

### Day 17:  Type narrowing

Today, I learned about type narrowing. It is simply being specific to what is the data type of your variable if it has many types being declared. We mostly use the typeof when checking the data type.

### Day 18:  Type narrowing using in

Today, I learned about using in function to further type narrowing. It is a method used to check whether a specific thing is part of the object/variable.

### Day 19:  Type narrowing using instanceof and predicates

Today, I learned about using instanceof for narrowing. It is usually used to checked if an the thing to be checked is created using the new keyword while the type predicates is used for checking usually for interface using the "as" keyword to check and in return of the function, use "is" keyword.

### Day 19: Discriminate union and exhaustiveness checking using never type

Today, I learned about using discriminated union for further checking the type and also using the never type in a switch statement for the default case.

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

Day 10 Code samples on classes

```typescript
class User {

    readonly city: string = "manila"
    constructor(
        public email: string, 
        public name: string,
        private userId: number = 123
        ){
        

    }
}

const newUser = new User('h@com', 'hitesth')
```
Day 11 Code samples on getters and setters

```typescript
class User {

    readonly city: string = "manila"
    private _courseCount = 1

    constructor(
        public email: string, 
        public name: string,
        private userId: number = 123
        ){
        

    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const newUser = new User('h@com', 'hitesth')
```
Day 13 Code samples on generics

```typescript
function identityFour<T>(val: T): T{
    return val
}

// -another example of using generics

interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({})
```
Day 14 Code samples on abstract class

```typescript

abstract class TakePhoto {
  constructor(
    public cameraMode: string, 
    public filter: string
    ) {}

    abstract sepia(): void;
    // -notice we can still create a function just like in interface
    getReelTime(): number{
        // -some complex calculation
        return 8
    }
}

// -notice when we add the word abstract, it now  became error
// -when we create abstract class we can't create an object, it is like interface a blueprint
// -another difference from interface is when we make interface as blueprint in class we use the word implement while an abstract we use extends
// - also to initialize an object we use the class that extends it. (in the example we use the Instagram instead of TakePhot)


// const test =  new TakePhoto("test", "Test")
``` 

Day 15 Code samples on generics
```typescript
// -generics in array and arrow functions

const getMoreSeachProduct = <T,>(products: T[]):T  => {
  // do some database operations
  const myIndex = 5;
  return products[myIndex];
}
``` 

Day 16 Code samples on generics

```typescript
// -generics classes
 
function getProperty< T, Key extends keyof T>(obj: T, key: Key){
    return obj[key]
}

let x = {a: 1, b:2, c: 3, d: 4}

getProperty(x, 'a')
// getProperty(x, 'm')
// -last example will error since m is not a property of the object passed

// another example


interface Database{
    connection: string,
    username: string,
    password: string
}

function anotherFunc<T , U extends Database>(valOne:T, valTwo: U){
    return {
        valOne,
        valTwo
    }
}
``` 

Day 18 Code samples on using in method for type narrowing

```typescript
interface User {
    name: string;
    email: string
}

interface Admin {
    name: string
    email: string
    isAdmin: boolean

}

function isAdmin(user: User | Admin){
    if("isAdmin" in user){
        return user.isAdmin
    }
}
``` 

## Resources

In this section, I will be sharing resources related to Typescript that I have found helpful during my journey.

- "Typescript Tutorial for Beginners" by FreeCodeCamp.org
- Official Typescript Documentation
- [Typescript Handbook](https://www.typescriptlang.org/docs
