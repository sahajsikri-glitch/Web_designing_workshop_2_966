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
  passenger = "Mr ." + passenger.name;

  if (passenger.passport === 23545) {
    alert("checked in");
  } else {
    alert("wrong passport");
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
const result = checkIn(undefined, jonas);
console.log(result);
