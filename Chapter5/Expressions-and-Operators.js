let x;
x = 3 * 5;

let x, y;
y = x = 3 * 5;
y = x = 15;
y = 15;

15;

//Operators

const x = 5;
const y = 3 - -x;

const s = "S";
const y = 3 + +s;

const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
const p1 = -x1*1;
const p2 = +x2*2;
const p3 = +3*3;
const p4 = -xx4*4;

let x = 2;
const r1 = x++ + x++; //5
const r2 = ++x + ++x; //11
const r3 = x++ + ++x; //14
const r4 = ++x + x++;
let y = 10;
const r5 = y-- + y--;
const r6 = --y + --y;
const r7 = y-- + --y;
const r8 = --y + y--;


//Operator Precedence
let x = 3, y;
x += y = 6*5/2;

//Compersion Operators
const n = 5;
const s = "5";
n === s;
n !== s;
n === Number(s);
n !== Number(s);
n == s;
n != s;

const a = { name: "an object"};
const b = { name: "an object"};
a === b;
a !== b;
a == b;
a !=b ;

3 > 5;
3  >= 5;
3 < 5;
3 <= 5;

5 > 5;
5 >= 5;
5 < 5;
5 <= 5;

//Comparing Numbers

let n=0;
while(true) {
    n += 0.1;
    if(n === 0.3) break;
}
console.log(`Stopped at ${n}`);

let n = 0;
while(true){
    n += 0.1;
    if(Math.abs(n - 0.3) < Number.EPSILON) break;
}
console.log(`stopped at ${n}`);

//String Concatenation

3 + 5 + "8"  // "88"
"3" + 5 + 8 //"358"

//Short-Circuit Evaluation

const skipIt = true;
let x = 0;
const result = skipIt || x++;

const doIt = false;
let x = 0;
const result = doIt && x++;

//Conditional Operator

const doIt = false;
const result = doIt ? "Did it!" : "Didn't do it."

//Destructuring Assignment
const obj = { b: 2, c: 3, d: 4 };

const {a, b, c} = obj;
a;
b;
c;
d; // d is not defined

const obj = { b: 2, c: 3, d: 4};
let a, b, c;

({a, b, c}  = obj);

const arr = [1, 2, 3];

let [x, y] = arr;
x;
y;
z;

const arr = [1, 2, 3, 4, 5];

let [x, y, ...rest] = arr;
x;
y;
rest;

let a = 5, b = 10;
[a, b] [b, a];
a;
b;

//Expressions in Template Strings

const roomTempC = 21.5;
let currentTempC = 19.5;
const message = `The current is ` + `${currentTempC-roomTempC}\u00b0C different than temperature.`;
const fahrenheit = `The current temoerature is ${currentTempC * 0/5 + 32} \u00b0F`;

//Expressions and Controll Flow Patterns

//Converting if..else Statememts to COnditional Expressions
if(isPrime(n)) {
    label = 'prime';
} else {
    label = 'non-prime';

    label = isPrime(n) ? 'prime' : 'non-prime'; 
}

//Converting if Statements to Short-Circuted Logical OR Expressions

if(!options) options = {};
//can be translated to 
options = options || {};


