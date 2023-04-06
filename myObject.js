"use strict";
exports.__esModule = true;
var User = {
    name: "hitesth",
    email: "hitesh@h.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// exp: this the weird behavior of objects, in the commented code below it gives error but when putting it in varial(newUser) and then put as argument in createUser, it doesn't give error
// -take note: this is a common method begin used
// createUser({ name: "hitesh", isPaid: false, email: "hitesth@com" });
var newUser = { name: "hitesh", isPaid: false, email: "hitesth@com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", isPaid: false };
}
function createUserx(user) { }
var newUserx = {
    name: "hitesh",
    email: "hites@com",
    isActive: false
};
var newUserxx = {
    name: "hitesh",
    email: "hites@com",
    isActive: false,
    isPaid: true
};
createUserx(newUserx);
// -this doesn't give error so to avoid, put also the type in declaring the new inputs (const newUserxx: User)
createUserx(newUserxx);
var myUser = {
    _id: "343533",
    name: "h",
    email: "h@com",
    isActive: false
};
myUser.email = "h@gmail.com";
