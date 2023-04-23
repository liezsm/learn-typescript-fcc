"use strict";
// class User {
//     email: string
//     name: string
//     city: string = ""
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name, userId = 123) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "manila";
        this._courseCount = 1;
    }
    deleteToken() {
        console.log("Token deleted.");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const newUser = new User('h@com', 'hitesth');
// newUser.city = "343"
