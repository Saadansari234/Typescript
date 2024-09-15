"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(2, 2));
// arrays and tupples
let arr = [1, "saad", true];
let arr2 = [{ name: "saad", age: 2, active: true },];
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
var Direction;
(function (Direction) {
    Direction["up"] = "ap";
    Direction["left"] = "left";
    Direction["right"] = "right";
    Direction["bottom"] = "bottom";
})(Direction || (Direction = {}));
console.log(Direction.bottom);
// inetrsection and union
let city = "saad";
let values = {
    name: "mumbai",
    district: 99,
    active: false
};
console.log(values);
