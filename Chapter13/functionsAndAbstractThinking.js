

//Functions as Subroutines
/*const year = new Date().getFullYear();
if(year % 4 !==0) console.log(`${year} is NOT a leap year.`)
else if(year % 100 != 0) console.log(`${year} IS a leap year.`)
else if(year % 400 != 0) console.log(`${year} is NOT a leap year.`)
else console.log(`${year} IS a leap year`); 

function printLeapYearStatus() {
    const year = new Date().getFullYear();
    if(year % 4 !== 0) console.log(`${year} is NOT a leap year.`)
    else if(year % 100 != 0) console.log*`${year} IS a leap year.`
    else if(year % 100 != 0) console.log(`${year} is NOT a leap year.`)
    else console.log(`${year} IS a leap year`);
}
console.log(printLeapYearStatus());

function isCurrentYearLeapYear() {
    const year = new Date().getFullYear();
    if(year % 4 !==0) return false;
    else if(year % 100 != 0) return true;
    else if(year % 400 != 0) return false;
    else return true;
}

const daysInMonth = 
    [31, isCurrentYearLeapYear() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if(isCurrentYearLeapYear()) console.log(`It is a leap year.`);
console.log(daysInMonth);*/

//Functions as... Functions

/*const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let colorIndex = -1;
function getNextRainbowColor() {
    if(++colorIndex >= colors.length) colorIndex = 0;
    return colors[colorIndex];
}
console.log(getNextRainbowColor());

function isLeapYear(year) {
    if(year % 4 !==0) return false;
    else if(year % 100 != 0) return true;
    else if(year % 400 != 0) return false;
    else return true;
}

const getNextRainbowColors = (function() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    return function() {
        if(++colorIndex >= colors.length) colorIndex = 0;
        return colors[colorIndex];
    };
})();
console.log(getNextRainbowColors());*/

//IIFEs and Asyncronous Code

/*setTimeout(function() { console.log("hello"); }, 1500);

var i;
for (i=5; i>=0; i--) {
    setTimeout(function() {
        console.log(i===0 ? "go" : i);
    }, (5-i)*1000);
}

for(let i=5; i>=0; i--) {
    setTimeout(function() {
        console.log(i===0 ? "go" : i);
    }, (5-i)*1000);
}*/

//Function Variables

/*function addThreeSquareAddFiveTakeSquareRoot(x) {
    return Math.sqrt(Math.pow(x+3, 2)+5);
}
const answer = (addThreeSquareAddFiveTakeSquareRoot(5) + addThreeSquareAddFiveTakeSquareRoot(2)) / addThreeSquareAddFiveTakeSquareRoot(7);

const f = addThreeSquareAddFiveTakeSquareRoot;
const theAnswer = (f(5) + f(2)) / f(7);
console.log(answer);
console.log(f());
console.log(theAnswer);

var money = require("money-math");

const Dollar = money.format("USD", "1.00");
const oneDollar = currency(1);


const twoDollars = currency(2);

console.log(twoDollars);

// I tried installing a few NPM packages herre, but couldnt find money or currency*/

//Functions in an Array

/*const sin = Math.sin;
const cos = Math.cos;
const theta = Math.PI/4;
const zoom = 2;
const offset = [1, -3];

const pipeline = [
    function rotate(p) {
        return {
            x: p.x * cos(theta) - p.y * sin(theta),
            y: p.x * sin(theta) + p.y * cos(theta),
        };
    },
    function scale(p) {
        return { x: p.x * zoom, y: p.y * zoom };
    },
    function translate(p) {
        return { x: p.x + offset[0], y: p.y + offset[1] };
    },
];
console.log(pipeline);

const p = { x: 1, y: 1 };
let p2 = p;
for(let i=0; i<pipeline.length; i++) {
    p2 = pipeline[i](p2);
}
console.log(p);
console.log(p2);*/

// Pass a Function into a Function

//function sum(arr, f) {
  //  if(typeof f != 'function') f = x => x;
    //return arr.reduce((a, x) => a += f(x), 0);
//}

/*console.log(sum[1, 2, 3]);
console.log([1, 2, 3], x => x*x);
console.log([1, 2, 3], x => Math.pow(x, 3));*/

//Return a Function from a Function

/*function sumOfSquares(arr) {
    return sum(arr, x => x*x);
}

function newSummer(f) {
    return arr => sum(arr, f);
}

const sumOfSquarez = newSummer(x => x*x);
const sumOfCubez = newSummer(x => Math.pow(x, 3));
console.log(sumOfSquarez([1, 2, 3]));
console.log(sumOfCubez([1, 2, 3]));*/

//Recursion
function findNeedle(haystack) {
    if(haystack.length === 0) return "no haystack here!";
    if(haystack.shift() === 'needle') return "found it!"
    return findNeedle(haystack);
}


console.log(findNeedle(['hay', 'hay', 'hay', 'hay', 'needle', 'hay', 'hay']));

function fact(n) {
    if(n === 1) return 1;
    return n * fact(n-1);
}
