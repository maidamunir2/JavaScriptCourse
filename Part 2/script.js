'use strict';
function logger() {
    console.log('My name is Maida Munir');
}
//calling
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(3, 2);
console.log(appleJuice);

// Function Declaration
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}
console.log(calcAge1(1999));

// Function Expression
const calcAge2 = function (birthYear) {
    const age = 2037 - birthYear;
    return age;
}

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(2000))

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));

function cutFruitPieces(fruit) {
    return fruit * 4;
}


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        return `Dolphins win ${avgDolphins} vs ${avgKoalas}`;
    } else if (avgKoalas <= (2 * avgDolphins)) {
        return `Koalas win ${avgKoalas} vs ${avgDolphins}`;
    } else {
        return `No Team Win...`
    }

}
//Data 1 Test
var avgD = calcAverage(44, 23, 71);
var avgK = calcAverage(65, 54, 49);
var winner = checkWinner(avgD, avgK);
console.log(winner);
//Data 2 Test
var avgD = calcAverage(85, 54, 41);
var avgK = calcAverage(23, 34, 27);
var winner = checkWinner(avgD, avgK);
console.log(winner);

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friend = ['Michael', 'Steven', 'Peter'];
console.log(friend);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friend[1]);
console.log(friend.length);
console.log(friend[friend.length - 1]);

friend[2] = 'Maida';
console.log(friend);
let x;
for (x = 0; x < years.length; x++) {
    console.log(calcAge1(years[x]));
}

friend.push('Nida-e-Aman');
friend.push('Memoona');
console.log(friend);
console.log(friend.pop());
console.log(friend);

friend.unshift('Uzma');
friend.unshift('Hifza');
console.log(friend);

friend.shift();
console.log(friend);

console.log(friend.indexOf('John'));
console.log(friend.indexOf('Steven'));
console.log(friend.includes('Steven'));
console.log(friend.includes('John'));

if (friend.includes('Uzma') && friend.includes('Nida-e-Aman')) {
    console.log(`You have a friend called Uzma and Nida-e-Aman`)
};

function calcTip(billValue) {
    if (billValue > 50 && billValue < 300) {
        const tip = billValue * (15 / 100);
        return tip;
    } else {
        const tip = billValue * (20 / 100);
        return tip;
    }
}
console.log(`Tip: `, calcTip(100));

const bills = new Array(125, 555, 44);
const tips = [];
const total = [];
tips.push(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[2]));
total.push(tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]);
console.log(`Bills Array:`, bills);
console.log(`Tips Array:`, tips);
console.log(`Total Array:`, total);

const maidaArray = [
    'Maida',
    'Munir',
    2037 - 1999,
    'Software Engineer',
    ['Uzma', 'Nida-e-Aman', 'Fatima', 'Wajeeha']
];

//object literal syntax
const maida = {
    firstName: 'Maida',
    lastName: 'Munir',
    birthYear: 1999,
    job: 'Software Engineer',
    friends: ['Uzma', 'Nida-e-Aman', 'Fatima', 'Wajeeha'],
    hasDriverLiscence: true,
    calculateAge: function (birthYear) {
        return 2037 - 1999;
    },
    calculateAge2: function () {
        this.ageee = 2037 - this.birthYear;
        return this.ageee;
    },
    getSummary: function () {
        return `${this.firstName} ${this.lastName} is a ${this.ageee} year's old ${this.job} and  she has ${this.hasDriverLiscence ? 'a' : 'no'} driver's license.`
    }
};
console.log(maidaArray);
console.log(maida);
console.log(maida.firstName);
console.log(maida['lastName']);

const nameKey = 'Name';
console.log(maida['first' + nameKey]);

maida.location = 'Lahore';
maida['twitter'] = '@kyon?';
console.log(maida);


console.log(`${maida.firstName} ${maida.lastName} has ${maida.friends.length} friends and her best friend is ${maida.friends[0]}`);

console.log(maida.calculateAge(maida.birthYear));
console.log(maida['calculateAge'](maida.birthYear));
console.log(maida.calculateAge2());


console.log(maida.getSummary());

const mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}
const john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}
if (john.calcBMI() > mark.calcBMI()) {
    console.log(`John's BMI (${john.calcBMI()}) is higher than Mark's (${mark.calcBMI()})`);
} else if (mark.calcBMI() > john.calcBMI()) {
    console.log(`Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})`);
}

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


//continue terminate the current iteration while break terminates the whole loop
console.log('---- ONLY STRINGS ----');
for (let j = 0; j <= maidaArray.length; j++) {
    if (typeof maidaArray[j] !== 'string') continue;
    console.log(maidaArray[j], typeof maidaArray[j]);
}

console.log('---- BREAK WITH NUMBER ----');
for (let j = 0; j <= maidaArray.length; j++) {
    if (typeof maidaArray[j] === 'number') break;
    console.log(maidaArray[j], typeof maidaArray[j]);
}

console.log('---- Backward Array  ----');
for (let r = maidaArray.length; r > 0; r--) {
    console.log(maidaArray[r - 1]);
}
let repi = 1;
while (repi <= 10) {
    console.log(`lifting weights repitation ${repi}`);
    repi++;
}

let dice = Math.trunc(Math.random() * 6 + 1);
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6 + 1);
    if (dice === 6) console.log(`loop is about to end...`);
}

const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipss = [];
const totals = [];
function calcTotal(b, t) {
    let total = b + t;
    return total;
}
for (let t = 0; t < billss.length; t++) {
    tipss.push(calcTip(billss[t]));
    totals.push(calcTotal(billss[t], tipss[t]));
}

console.log('Bills:', billss);
console.log('Tips:', tipss);
console.log('Total:', totals);