"use strict";
function detectType(val) {
    // return val.toLowerCase()
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log('please provide id');
        return;
    }
    id.toLocaleLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs == "string") {
            console.log(strs);
        }
    }
}
function isAdmin(user) {
    if ("isAdmin" in user) {
        return user.isAdmin;
    }
}
// -using instanceof narrowing
// new Date()
// new Arr
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString);
    }
    else {
        console.log(x.toLocaleLowerCase());
    }
}
function isFish(pet) {
    // if(food as Fish){
    // }
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish food";
    }
    pet;
    return "bird food";
}
function getShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side;
}
// -exhaustiveness checking with never
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        default:
            const EXHAUST_CHECK = shape;
            return EXHAUST_CHECK;
    }
}
