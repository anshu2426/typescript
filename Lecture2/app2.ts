enum role {
  MALE = "male",
  FEMALE = "female",
}
const a: {
  name: string;
  age: number;
  xyz: {
    comment: string;
  };
  skills: string[];
  role: role;
} = {
  name: "anshul",
  age: 22,
  xyz: {
    comment: "hello there",
  },
  skills: ["react", "node", "express"],
  role: role.MALE,
};
const b: any[] = ["string", true, 10];
const c: string[] = ["string", "number"];

console.log(a);
console.log(b);
console.log(c);
