// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
//prettier is opiniated code formatter
//opinionated means they have strong opinion
//when we use the tool we have to the opinion
if (x === 23) console.log(23);
const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1950));

//challenge

function printForecast(array) {
  let str = '';
  for (let i = 0; i < array.length; i++) {
    str = str + `... ${array[i]}\xB0C in ${i + 1} days`;
  }
  console.log(str);
}
let array = [17, 21, 23];
let array1 = [12, 5, -5, 0, 4];
printForecast(array1);
