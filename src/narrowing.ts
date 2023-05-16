
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