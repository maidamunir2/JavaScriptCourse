
let j = "Amazing";
// if (j === "Amazing") alert("Yes JavaScript Is Amazing");
console.log(20 - 10);
console.log("Jonas");

let firstName = "Maida";
let LastName = "Munir";
let fullName = firstName + " " + LastName;

console.log(fullName);
console.log(typeof (fullName));

let PI = 3.1415;
let myFirstJob = 'Programmer';
let myCurrentJob = 'Still a Programmer';

console.log("my current job:", myCurrentJob);

let javascriptIsFun = true;

console.log(javascriptIsFun);
console.log(typeof (javascriptIsFun));

let year;
console.log(typeof (year));
year = 1991;
console.log(typeof (year));

// typeof(null) =object it is an error or bug in javascript
let age = 30;

//mutating the age value /mutating the variable
age = 31;

// we can not re-assign the value of const variable
const birthYear = 1999;

var job = 'programmer';
job = 'teacher';

//let and var actually very different although they look like they are same

const ageMaida = 2037 - 1999;
console.log(ageMaida);
console.log(2 ** 3);
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

console.log(ageMaida > 30);

markMass = prompt("Enter Marks Weight:");
markHeight = prompt("Enter Marks Height:");
johnMass = prompt("Enter John Weight:")
johnHeight = prompt("Enter John Height:");
markBMI = markMass / (markHeight ** 2);
console.log(markBMI);
johnBMI = johnMass / (johnHeight ** 2);
console.log(johnBMI);
const markHigherBMI = (markBMI > johnBMI);
console.log(markHigherBMI);

if (markBMI > johnBMI) {
    console.log(`Mark BMI ${markBMI} is higher than John ${johnBMI}`)
}
else {
    console.log(`John's BMI ${johnBMI} is higher than mark ${markBMI}`)
}

const maida = `I'm ${firstName} ${LastName}`;

console.log(maida);
console.log('String with \n\
multiple lines');
console.log(`multi
lines
in 
javascript`)

const age_ = 15;
const isOldEnough = age_ >= 18;

if (isOldEnough) {
    console.log(`Yes you can start the driving license 🚗`)
}
else {
    const yearsLeft = 18 - age_;
    console.log(`you are too young Just wait
    ${yearsLeft} years :)`)
}

//Type Conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(Number('John')); //give NaN 

console.log(String(22));

//type coercion
console.log('I am ' + 22 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

//falsy values : 0,,'',undefined,null, Nan
//truthy value : any string

console.log(Boolean(0));
console.log(Boolean(undefined));

const money = 0;
if (money) {
    console.log("Don't spend it all")
} else {
    console.log("You should get a job")
}

let Height;
if (Height) {
    console.log("YAY! Height is defined")
} else {
    console.log("Height is Undefined")
}

const age__ = 10;
if (age__ === 10) console.log("You are 10")

const hasDriverLiceense = true;
const hasGoodVision = true;
console.log(hasDriverLiceense && hasGoodVision);

if (hasGoodVision && hasDriverLiceense) {
    console.log("Sarah is able to drive")
}
else {
    console.log("someone else should drive")
}

let match1D = prompt("Enter match one score for dolphins:");
let match2D = prompt("Enter match two score for dolphins:");
let match3D = prompt("Enter match three score for dolphins:");
dolphinAverageScore = (match1D + match2D + match3D) / 3;
let match1K = prompt("Enter match one score for Koalas:");
let match2K = prompt("Enter match two score for Koalas:");
let match3K = prompt("Enter match three score for Koalas:");
koalasAverageScore = (match1K + match2K + match3K) / 3;

if (dolphinAverageScore > koalasAverageScore && dolphinAverageScore >= 100) {
    console.log("Dolphin won");
}
else if (koalasAverageScore > dolphinAverageScore && koalasAverageScore >= 100) {
    console.log("Koalas won");
} else if (koalasAverageScore === dolphinAverageScore && koalasAverageScore >= 100 && dolphinAverageScore >= 100) {
    console.log("Match Draw")
} else {
    console.log("No one win the trophy")
}

const day = 'Monday';

switch (day) {
    case 'Monday':
        console.log("It is Monday today");
        break;
    case 'Tuesday':
        console.log("Tuesday today");
        break;
    default:
        console.log("Not a day");
}

//conditional operators
const Age = 28;
Age >= 18 ? console.log('I Like to drink wine') : console.log('I Like to drink water');

const drink = Age >= 18 ? 'wine' : 'water';
console.log(drink);

let billValue = Number(prompt("Enter the bill value:"));
let tip;
billValue >= 50 && billValue <= 300 ? tip = billValue * (15 / 100) : tip = billValue * (20 / 100)

console.log(billValue, tip, billValue + tip);