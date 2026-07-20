"use strict";

//default parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 99 * numPassenger,
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("Lh123");
createBooking("LH123", 8, 3);
createBooking("LH123", 7);
