const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): bolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}


function identityThree<Type>(val: Type){
    return val
}


identityThree(3)
identityThree("3")

function identityFour<T>(val: T): T{
    return val
}

// -another example of using generics

interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({})



// -generics in array and arrow functions

function getSearchProduct<T>(products: T[]): T{
    // do some database operations
    const myIndex = 3;
    return products[myIndex]
}

const getMoreSeachProduct = <T,>(products: T[]):T  => {
  // do some database operations
  const myIndex = 5;
  return products[myIndex];
}

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

// anotherFunc(3,"sam")
anotherFunc(3,{})

interface  Quiz{
    name: string,
    type: string
}

interface  Course{
    name:string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(product:T){
        this.cart.push(product)
    }

}