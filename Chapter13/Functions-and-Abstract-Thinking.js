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
    return { x: p.x + offset[0], y: p.y + offset[1]; };
},
];