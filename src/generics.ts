const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): bolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}


function identityThree<Type>(val: Type){
    return val
}


identityThree(3)
identityThree("3")

function identityFour<T>(val: T): T{
    return val
}

// -another example of using generics

interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({})