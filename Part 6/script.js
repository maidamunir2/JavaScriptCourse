'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function (obj) {
    console.log(obj);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [first, , second] = restaurant.categories;
console.log(first, second);
console.log(restaurant.categories[3]);

const temp = first;
first = second;
second = temp;
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

const nested = [2, 4, [5, 6]];
console.log(nested[0], nested[2]);
const [i, , j] = nested;
console.log(i, j);
const [l, , [m, n]] = nested;
console.log(l, m, n);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menue = [], starterMenu: starters = [] } = restaurant;

console.log(menue, starters);

//Mutating variables
let x1 = 111;
let x2 = 999;
const obj = { x1: 23, x2: 7, c: 14 };
({ x1, x2 } = obj);
console.log(x1, x2);

//Nested objects
const {
  sat: { open, close },
} = openingHours;
console.log(open, close);

const {
  sat: { open: o, close: f },
} = openingHours;
console.log(o, f);

restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole,21',
  mainIndex: 2,
  starterIndex: 2,
});
