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

//how passing arguments works (VaLUES VS REFERENCE)
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

//fnction returning function:
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet("hey");
greeterHey("jonas");
greeterHey("sahaj");
greet("hello")("jonas");

//in arrow function :
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("hi")("fuddu");

// The call and apply Methods
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');
// ye bakchodi use karoge toh use call methods

// Call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");

// Apply method (NO USE DONT SEE IT )
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

//ALTERNATE OF APPLY METHOD (COZ OF DESTRCUTING)
book.call(swiss, ...flightData);

// The bind Method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtmann");
bookEW23("Martha Cooper");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

//DOUBT ///////////////////////////////// WHAT IS BIND? ASK GPT
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); //in this instead of null it could be any other value
//bind is like default? ig but strict default that you have to use this only
// AND DIFFERENCE :
// using bind return us a different fucntion too
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
