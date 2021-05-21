'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  //ES5
  //numPassengers = numPassengers || 1;
  //price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH456', 2, 200);

const flight = 'LH234';
const maida = {
  name: 'Maida Munir',
  passport: 927399479,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'Lh999';
  passenger.name = 'Ms.' + passenger.name;

  if (passenger.passport === 927399479) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};
checkIn(flight, maida);
console.log(flight);
console.log(maida);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(maida);
checkIn(flight, maida);
console.log(maida);
