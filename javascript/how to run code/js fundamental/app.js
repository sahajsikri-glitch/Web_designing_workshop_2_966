var name = "sahaj";
// var age = 30;
// console.log(name);
var age = 50;
// console.log(age);

// let name = "sahaj";
// let age = 30;
// console.log(name);
// let age = 50;
// console.log(age);

// if (true) {
//   var age = 30;
// }
// console.log(age);

// if (true) {
//   let age = 30;
// }
// console.log(age);
console.log(typeof name);
console.log(typeof age);

let result;
console.log(result);
console.log(typeof result);

let student = {
  name: "anjali",
  age: 22,
  ispassed: true,
};
console.log(student);
console.log(typeof student);
console.log(student.name);
console.log(student.age);

//ARRAY :
let marks = [85, 90, 78, 91, 373];
console.log(marks);
console.log(typeof marks);

console.log(marks.length);
console.log(marks[1]);

//tempelate literals
let message = `hello ${name} , you are ${age} years old`;
console.log(message);

// 16/04/26
//ARRAY DATA TYPE
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

// let mixedArray = [1, "hello", true, { name: "alice" }, [1, 2, 3]];
// console.log(mixedArray[0]);
// console.log(mixedArray[1]);
// console.log(mixedArray[2]);
// console.log(mixedArray[3]);
// console.log(mixedArray[4]);
// //to find length of array
// console.log(numbers.length);

//normal function with no parameters
function greet() {
  console.log("hello,world !");
}
greet();

function multiply(a, b) {
  return a * b;
}
console.log(multiply(10, 2));

//arrow function with no parameters
let sayhi = () => console.log("Hi !");
sayhi(); //Hi !

//arrow function with single parameters
let square = (x) => x * x;
console.log(square(4)); //16

//for each on array
//for each executes a provided function once
//for each array element
// let animals = ["rabbit", "cat", "dog"];
// animals.forEach(animals);

//#23/04/26
let mixedobject = {
  name: "alice",
  age: 19,
  address: {
    street: "123  main st",
    city: "new york",
    country: "USA",
  },
  greet: function () {
    cconsole.log("hello");
  },
};

console.log(mixedobject.name);
console.log(mixedobject.address.street);

//object inside array
let people = [
  { name: "alice", age: 25 },
  { name: "bob", age: 19 },
  { name: "charlie", age: 35 },
];

console.log(people[0]);
console.log(people[1].name);
console.log(people[2].age);

for (let student of people) {
  console.log(
    student.name +
      " is " +
      student.age +
      " years old === code execution successful",
  );
}

let company = {
  name: "tech corp",
  employees: ["alice", "bob", "charlie"],
};

for (let employee of company.employees) {
  console.log(`${employee} works at ${company.name}`);
}

for (let key in company) {
  console.log(key + " : " + company[key]);
}
