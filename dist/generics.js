"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree("3");
function identityFour(val) {
    return val;
}
identityFour({});
// -generics in array and arrow functions
function getSearchProduct(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSeachProduct = (products) => {
    // do some database operations
    const myIndex = 5;
    return products[myIndex];
};
// -generics classes
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');
function anotherFunc(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
// anotherFunc(3,"sam")
anotherFunc(3, {});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
