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
