const year = new Date().getFullYear();
if(year % 4 !== 0) console.log(`${year} is NOT a leap year`)
else if(year % 100 !== 0) console.log(`${year} IS a leap year.`)
else if (year % 400 !== 0) console.log(`${year} is NOT a leap year.`)
else console.log(`${year} IS a leap year`);

function printLeapYearStatus(){
    const year = new Date().getFullYear();
    if(year % 4 !== 0) console.log(`${year} is NOT a leap year`)
    else if(year % 100 !== 0) console.log(`${year} IS a leap year.`)
    else if (year % 400 !== 0) console.log(`${year} is NOT a leap year.`)
    else console.log(`${year} IS a leap year`);
    
}

function iscurrentYearIsLeapYear() {
    const year = new Date().getFullYear();
    if(year % 4 !== 0) return false;
    else if(year % 100 !== 0) return true;
    else if (year % 400 !== 0) return false;
    else return true;  
}

const daysInMonth = [31, isCurrentLeapYear() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if(iscurrentYearIsLeapYear()) console.log('It is a leap year. ');

//functions are objects

//IIFEs and Asynchronous Code
setTimeout(function() { console.log("hello"); }, 1500);
var i;
for(i=5; i>=0; i--) {
    setTimeout(function() {
        console.log(i===0 ? "go!" : i);
    }, (5-i)*100);
}
function loopBody(i) {
    setTimeout(function() {
        console.log(i===0 ? "go!" : i);
    }, (5-1)*1000)
} 
    var i;
    for(i=5; i>0; i--) {
        loopBody(i);
    }
 //block-scoped variables wok better
 for(let i=5; i>=0; i--) {
     setTimeout(function() {
         console.log(i===0 ? "go!" : i);
     }, (5-i)*1000);
 }   

 //Function Variables

 function addThreeSquareAddFiveTakeSquareRoot(x) {
     return Math.sqrt(Math.pow((x+3), 2)+5);
 }
const f= addThreeSquareAddFiveTakeSquareRoot;
const answer = (f(5) + f(2)) /  f(7);

//Functiona in an Array

const sin = Math.sin;
const cos = Math.cos;
const theta = Math.theta;
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
    return { x: p.x + offset[0], y: p.y + offset[1], };
},
];

const p = { x: 1, y: 1 };
let p2 = p;
for(let i=0; i<pipeline.length; i++) {
    p2 = pipeline[i](p2);
}

//Pass a Function into a Function
function sum(arr, f) {
    if(typeof f != 'function') f = x => x;

    return arr.reduce((a, x) => a += f(x),0);
}
sum([1, 2, 3]);
sum([1, 2, 3], x => x*x);
sum([1, 2, 3], x => Math.pow(x, 3));

//Return a Function from a Function

function sumOfSquares(arr) {
    return sum(arr, x => x*x);
}

function newSummer(f) {
    return arr => sum(arr, f);
}

const sumOfSquares = newSummer(x => x*x);
const sumOfCubes = newSummer(x => Math.pow(x, 3));
sumOfSquares([1, 2, 3]);
sumOfCubes([1, 2, 3]);

//Recursion

function findNeedle(haystack) {
    if(haystack.length === 0)
    if(haystack.shift() === 'needle')
    return findNeedle(haystack);
}

findNeedle(['hay', 'hay', 'hay', 'needle', 'hay', 'hay']);

//OR

function fact(n) {
    if(n === 0) return 1;
    return n * fact(n-1);
}