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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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

const arryy = [7, 8, 9];
const badNewArr = [1, 2, arryy[0], arryy[1], arryy[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu123 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu123);

//Iterables: arrays, strings, maps, sets
//objects are not iterable
const str = 'Jonas';
const letters = [...str];
console.log(letters);
console.log(...str);

// const ingredients = [
//   prompt('lets make pasta! Ingredient 1?'),
//   prompt('lets make pasta! Ingredient 2?'),
//   prompt('lets make pasta! Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
//Destructuring
//Rest Pattern and Parameters
//SPREAD, BECAUSE ON RIGHT SIDE OF=
const arrt = [1, 2, ...[3, 4]];
//Resr because on LEFT side of =
const [aa, bb, ...others] = [1, 2, 3, 4, 5];
console.log(aa, bb, others);
const [pizza, , risottp, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risottp, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 3);

const xx = [23, 5, 7];
add(...xx);
restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
// Short-circuiting
console.log(3 || 'Jona');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);
//NULLISH:null and undefined
const guestCorrect = restaurant.numGuests ?? 10;

console.log('---AND---');

console.log(0 && 'jonas');
console.log(7 && 'jonas');
console.log('Hello' && '23' && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'soinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu2) console.log(item);
for (const item of menu2.entries()) {
  console.log(`${item[0] + 1}:${item[1]}`);
}
for (const [i, el] of menu2.entries()) {
  console.log(`${i + 1}:${el}`);
}
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open;
  console.log(`on ${day}, we open at ${open}`);
}

const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `we  are open in ${properties.length} days`;
for (const day of properties) {
  openStr += `${day}`;
}
console.log(openStr);

const values = Object.values(openingHours);

const ordersSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pizza']);
console.log(ordersSet);
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);
ordersSet.delete('Garlic Bread');
console.log(ordersSet);
console.log(ordersSet.has('Garlic Bread'));
for (const order of ordersSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef']).size);

//Maps (Data-Structure)
const rest = new Map();
rest.set('name', 'classico italino');
rest.set(1, 'Firenze, Italy');

console.log(rest.get(1));

console.log(rest.has('categories'));
rest.delete(1);
console.log(rest);
console.log(rest.size);

const arrr = [1, 2];
rest.set(arrr, 'Test');
console.log(rest.size);
console.log(rest.get(arrr));

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'JAVA'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);
console.log(question);

//Convvert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
}
const ANSWER = Number(prompt('Your Answer'));
console.log(ANSWER);

console.log(question.get(question.get('correct') === ANSWER));

console.log(...question);
console.log([...question.entries()]);
console.log([...question.values()]);
console.log([...question.keys()]);

const airLine = 'TAP Air Portugal';
console.log(airLine[2]);
console.log(airLine.length);
console.log(airLine.indexOf('o'));
console.log(airLine.lastIndexOf('r'));
console.log(airLine.slice(4, 7));
console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('YOU GOT LUCKY');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Jonas'));
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
console.log();

//comparing emails
const email = 'hello@jonas.io';
const loginEmail = 'Hello@jonas.Io\n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim;
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '288,97';
const priceGB_Replace = priceGB.replaceAll('8', '7');
console.log(priceGB_Replace);
console.log(priceGB.includes('88'));
console.log(priceGB.startsWith('88'));
console.log('a+very+nice+string'.split('+'));

const capitalizeName = function (name) {
  const name0 = name.split(' ');
  const namesUpper = [];
  for (const n of name0) {
    n[0].toUpperCase() + n.slice(1);
  }
};
capitalizeName('jessica ann smith davis');

//Padding
const message = 'Go to gate 23!';
console.log('Jonas'.padStart(25, '+'));
