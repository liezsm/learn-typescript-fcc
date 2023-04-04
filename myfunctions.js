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
