"use strict";

// //default parameters
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassenger = 1,
//   price = 99 * numPassenger,
// ) {
//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("Lh123");
// createBooking("LH123", 8, 3);
// createBooking("LH123", 7);

//how passing arguments works (VLUES VS REFERENCE)
const flight = "LH123";
const jonas = {
  name: "jonas",
  passport: 23545,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr ." + passenger.name;

  if (passenger.passport === 23545) {
    alert("checked in");
  } else {
    alert("wrong passport");
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
// const result = checkIn(undefined, jonas);
// console.log(result);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(jonas);
checkIn(flight, jonas);

//NOTE : js doesn't have pass by reference

// First-Class Functions
/////////////////////////////////////////////////
// In JavaScript, functions are first-class citizens (or first-class values).
// This is a language feature, not a type of function.

// // Assigned to a variable
// const greet = function(name) {
//   return `Hello, ${name}`;
// };

// // Stored in an array
// const actions = [greet, function() { return "Bye"; }];

// // Passed as an argument
// setTimeout(greet, 1000); // or any callback

// // Returned from a function
// function createGreeter() {
//   return function(name) {
//     return `Hi, ${name}`;
//   };
// }

// Higher-Order Functions
////////////////////////////////////////////
// A higher-order function is a specific kind of function that either:
// Takes one or more functions as arguments, or
// Returns a function as its result (or both).

// Takes a function as argument
// [1, 2, 3].map((x) => x * 2); // map is higher-order
// [1, 2, 3].filter((x) => x > 1); // filter is higher-order
// setTimeout(() => console.log("hi"), 1000);

// // Returns a function
// function multiplyBy(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }
// const double = multiplyBy(2); // double is now a function
// double(5); // 10

// // Both (takes + returns)
// function withLogging(fn) {
//   return function (...args) {
//     console.log("Calling with", args);
//     return fn(...args);
//   };
// }

//Function accepting callback function()
const firstUpperWord = function (word) {
  const [first, ...others] = word.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//high order function
const transformer = function (str, fn) {
  console.log(`original string : ${str}`);
  console.log(`transformmed string : ${fn(str)}`);
  console.log(`transformmed by ${fn.name}`);
};
transformer("js is best", firstUpperWord);

const high5 = function () {
  console.log("444");
};
document.body.addEventListener("click", high5);
//here addeventlistener --> is high order function
// and high5 .appl--> callback function

//WHY WE USE HIGH-ORDER FUNCTION?
// IT GIVE OUR CODE ABSTRACTION
