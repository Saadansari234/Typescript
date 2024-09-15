
function add(a: number, b: number): number {
    return a + b
}

console.log(add(2, 2))

// arrays and tupples

let arr: [number, string, boolean] = [1, "saad", true]

let arr2: [{
    name: string,
    age: number,
    active: boolean
}] = [{ name: "saad", age: 2, active: true },]

// any

let variable;

// never: function dont return anything its an infinite function and will not run next code 

// function infiniteFunc(): never {
//     while (true) {
//         console.log("hay");
//     }
// }

// infiniteFunc()

console.log("aa");

// void : void function dont return 

// function voidFunc(): void {
//     console.log("hay");

// }

// voidFunc()

// enums : when you have to make variables in grouping form in type script

enum Direction{
    up="ap",
    left="left",
    right="right",
    bottom="bottom"
}

console.log(Direction.bottom);

// inetrsection and union

let city:string | number= "saad"


// we can make our own type 
type cities={
    name:string,
    active:boolean
}
type planet={
    district:number
}

type both= cities &  planet

let values:both= {
    name:"mumbai",
    district:99,
    active:false
}

console.log(values)

