"use strict";
exports.__esModule = true;
var score = 33;
score = "44";
var hites = {
    name: "hits",
    id: 444
};
hites = {
    username: "admin",
    id: 444
};
function getDBId(id) {
    console.log("DB is is ".concat(id));
    if (typeof id == "string") {
        id.toLowerCase();
    }
    if (typeof id == "number") {
        id.toFixed();
    }
}
getDBId(3);
getDBId("3");
// using union in array
// const data: number[] = [1,2,3,"4"]
// const data: string[] = [1,2,3,"4"]
// const data: string[] | number[] = [1,2,3,"4"]
var data = [1, 2, 3, "4"];
// example
var seatAllotment;
// seatAllotment = "test"
seatAllotment = "aisle";
