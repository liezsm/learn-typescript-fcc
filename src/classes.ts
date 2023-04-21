
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

    readonly city: string = "manila"
    constructor(
        public email: string, 
        public name: string,
        private userId: number = 123
        ){
        

    }
}

const newUser = new User('h@com', 'hitesth')
// newUser.city = "343"