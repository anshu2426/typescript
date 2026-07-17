"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var role;
(function (role) {
    role["MALE"] = "male";
    role["FEMALE"] = "female";
})(role || (role = {}));
const a = {
    name: "anshul",
    age: 22,
    xyz: {
        comment: "hello there",
    },
    skills: ["react", "node", "express"],
    role: role.MALE,
};
const b = ["string", true, 10];
const c = ["string", "number"];
console.log(a);
console.log(b);
console.log(c);
//# sourceMappingURL=app2.js.map