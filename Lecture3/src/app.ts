//union
function combine(a: number | string, b: number | string) {
  let r: number | string;
  if (typeof a === "number" && typeof b === "number") return a + b;
  return a.toString() + b.toString();
}
console.log(combine(10, 20));
console.log(combine("anshul", "yadav"));
//literal types

function gender(a: "male" | "female") {
  console.log(`this thing is ${a}`);
}

gender("male");
gender("female");

//type alias/custom type
type choice = number | string;
type user = {
  firstName: string;
  lastName: string;
};
const User: user = {
  firstName: "anshul",
  lastName: "yadav",
};
function combine2(a: choice, b: choice) {
  let r: number | string;
  if (typeof a === "number" && typeof b === "number") return a + b;
  return a.toString() + b.toString();
}
console.log(combine2(40, 60));
console.log(combine2("alex", "wasabi"));
