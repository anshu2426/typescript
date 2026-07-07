"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//union
function combine(a, b) {
    let r;
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    return a.toString() + b.toString();
}
console.log(combine(10, 20));
console.log(combine("anshul", "yadav"));
//literal types
function gender(a) {
    console.log(`this thing is ${a}`);
}
gender("male");
gender("female");
function combine2(a, b) {
    let r;
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    return a.toString() + b.toString();
}
console.log(combine2(40, 60));
console.log(combine2("alex", "wasabi"));
//# sourceMappingURL=app.js.map