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

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

//Higher-Order-Function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String:  ${fn(str)}`);
  console.log(`Transformed by:${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

const high5 = function () {
  console.log('Hi');
};
document.body.addEventListener('click', high5);
['jonas', 'Marths', 'Adam'].forEach(high5);
