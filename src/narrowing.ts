
function detectType(val: number | string){
    // return val.toLowerCase()
    if(typeof val === "string"){
        return val.toLowerCase();
    }

    return val + 3;
}

function provideId(id: string){
    if(!id){
        console.log('please provide id')
        return 
    }

    id.toLocaleLowerCase();
}

function printAll(strs: string | string[] | null){
    if(strs){
        if(typeof strs === "object"){
            for(const s of strs){
                console.log(s)
            }
        }else if(typeof strs == "string"){
            console.log(strs)
        }
    }
}

// -in type narrowing

interface User {
    name: string;
    email: string
}

interface Admin {
    name: string
    email: string
    isAdmin: boolean

}

function isAdmin(user: User | Admin){
    if("isAdmin" in user){
        return user.isAdmin
    }
}

// -using is