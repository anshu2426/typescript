"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class department {
    name;
    employee;
    constructor(name, employee) {
        this.name = name;
        this.employee = employee;
    }
    static show() {
        return `this department name is ${this.name}`;
    }
    addEmployee(name) {
        this.employee.push(name);
    }
    showEmployee() {
        return this.employee;
    }
}
const a = new department("accounting", []);
const e = department.show();
console.log(e);
console.log(a.showEmployee());
a.addEmployee("anshul");
a.addEmployee("ansh");
a.addEmployee("yuvraj");
console.log(a.showEmployee());
class copy extends department {
    message;
    constructor(name, a, message) {
        super(name, a);
        this.message = message;
    }
}
const b = new copy("cs", [], "yoyoyoy");
b.addEmployee("gupta");
console.log(b.showEmployee());
class x {
}
class y extends x {
    describe() {
        console.log("hello there");
    }
}
const d = new y();
d.describe();
console.log(e);
console.log(e);
//# sourceMappingURL=classes.js.map