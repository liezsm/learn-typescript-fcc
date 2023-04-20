
class User {
    email: string
    name: string
    city: string = ""
    
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;

    }
}

const newUser = new User('h@com', 'hitesth')
newUser.city = "343"