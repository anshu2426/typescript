"use strict";
//function return type
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
//like this i can use many type stating my function return type like boolean ,string ,void or any
let b = add;
console.log(b(1, 2));
function greet(a) {
    console.log(`hi my name is ${a}`);
}
let c;
c = greet;
c("anshul");
function callback(a, b, c) {
    c(a + b);
}
function show(a) {
    console.log("this is the number that i wanted to show " + a);
}
callback(50, 60, show);
//# sourceMappingURL=app.js.map