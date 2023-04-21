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
    }
}
const newUser = new User('h@com', 'hitesth');
// newUser.city = "343"
