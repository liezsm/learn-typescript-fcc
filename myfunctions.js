"use strict";
exports.__esModule = true;
function addTwo(num) {
    //   num.toUpperCase();
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
// getUpper(4);
getUpper("hitesth");
function signupUser(name, email, isPaid) { }
var user = signupUser("emm", "emm@gm.com", false);
// -example of putting default value
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("h", "h@h.com");
// -better way to write function
// reminder: better way is to put also a type in return as well as the parameter
function getValue(num) {
    if (num > 5) {
        return true;
    }
    // return "200 OK"
    return false;
}
// -in arrow function
var getHello = function (s) {
    return "";
};
// const heros = ['ironman', 'spiderman']
var heros = [1, 2, 3];
// -lesson: so typescript also automatically infered the type when also using higher order functions like this
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// -functions that doesnt return, put a void as type
function consoleError(errmsg) {
    console.log(errmsg);
}
// -there are functions that never returns a value (void returns nothing)
// -best case uses is when throwing error or teminates execution of program
function handleError(errmsg) {
    throw new Error(errmsg);
}
