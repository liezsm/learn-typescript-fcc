
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
    private _courseCount = 1

    constructor(
        public email: string, 
        public name: string,
        private userId: number = 123
        ){
        

    }

    private deleteToken(){
        console.log("Token deleted.")
    }
    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const newUser = new User('h@com', 'hitesth')
// newUser.city = "343"