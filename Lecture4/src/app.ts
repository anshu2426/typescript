//function return type

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));
//like this i can use many type stating my function return type like boolean ,string ,void or any

let b: Function = add;

console.log(b(1, 2));

function greet(a: string): void {
  console.log(`hi my name is ${a}`);
}

let c: (a: string) => void;

c = greet;
c("anshul");

function callback(a: number, b: number, c: (d: number) => void): void {
  c(a + b);
}
function show(a: number): void {
  console.log("this is the number that i wanted to show " + a);
}
callback(50, 60, show);
