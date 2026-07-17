class department {
  name: string;
  private employee: string[];
  constructor(name: string, employee: string[]) {
    this.name = name;
    this.employee = employee;
  }
  static show() {
    return `this department name is ${this.name}`;
  }
  addEmployee(name: string) {
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
  message: string;
  constructor(name: string, a: string[], message: string) {
    super(name, a);
    this.message = message;
  }
}
const b = new copy("cs", [], "yoyoyoy");
b.addEmployee("gupta");
console.log(b.showEmployee());

abstract class x {
  abstract describe(): void;
}

class y extends x {
  describe(): void {
    console.log("hello there");
  }
}
const d = new y();
d.describe();

console.log(e);
console.log(e);
