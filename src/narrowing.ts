
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

// -using instanceof narrowing

// new Date()
// new Arr
function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString)
    } else{
        console.log(x.toLocaleLowerCase())
    }
}


// -using type predicates

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish{
    // if(food as Fish){

    // }
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Bird | Fish){

    if(isFish(pet)){
        pet
        return "Fish food"
    }
    pet
    return "bird food"

}

// -discriminated union

interface Circle {
    kind: "circle",
    radius: number
}
interface Square {
    kind: "square",
    side: number
}
interface Rectangle {
    kind: "rectangle",
    width: number,
    length: number
}

// -swicth these two to check the exhaust checking in switch

// type Shape = Circle | Square | Rectangle
type Shape = Circle | Square 

function getShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side
}

// -exhaustiveness checking with never

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        default:
            const  EXHAUST_CHECK: never = shape;
            return EXHAUST_CHECK
    }
}