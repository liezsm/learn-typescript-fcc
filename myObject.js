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
