// Operators
//Arithmetic Operators
//const x = 5;
//const y = 3 - -x;
//console.log(y);

//const s = "5";
//const y = 3 + +s;

//console.log(y);

/*const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
const p1 = -x1*1;
const p2 = +x2*2;
const p3 = +x3*3;
console.log(p3);
//const p3 = -x4*4;
console.log(p1);
console.log(p2);
console.log(p3);*/
/*//incrememt Operator
let x = 2;
const r1 = x++ + x++;
const r2 = ++x + ++x;
const r3 = x++ + ++x;
const r4 = ++x + x++;
let y = 10;
const r5 = y-- + y--;
const r6 = --y + --y;
const r7 = y-- + --y;
const r8 = --y + y--;
console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);
console.log(r6);
console.log(r7);
console.log(r8);*/

/*//Operator Precedence
var test = 8/2+3*(4*2-1);
console.log(test);

let x = 3, y;
x += y = 6*5/2;
console.log(x);*/

/*//Comparison Operators

const n  = 5;
const s = "5";
console.log(n === s);
console.log(n !== s);
console.log(n === Number(s));
console.log(n !== Number(s));
console.log(n == s);
console.log(n !== s);

const a = { name: "an object" };
const b = { name: "an object" };
console.log(a === b);
console.log(a !== b);
console.log(a == b);
console.log(a != b);

console.log(3 > 5);
console.log(3 >= 5);
console.log(3 < 5);
console.log(3 <= 5);
console.log(5 > 5);
console.log(5 >= 5);
console.log(5 < 5);
console.log(5 <= 5);*/


/*//Comparing Numbers
let n = 0;
while(true) {
    n += 0.1;
    if(n === 0.3) break;
}
console.log(`Stopped at ${n}`);*/

/*//String COncatenation
console.log(3 + 5 + "8");
console.log("3" + 5 + 8);*/

//Logical Operators
/*//AND, OR, and NOT
const x = 1;
const y = 2;
console.log((x || y) && x !== y);*/

/*//Short-Circuit Evaluation
const skipIt = true;
let x = 0;
const result = skipIt || x++;
console.log(result);
const doIt = false;
let y = 0;
const result2 = doIt && y++;
console.log(result2);*/

/*//Conditional Operator

const doIt = false;
const result = doIt ? "Did it!" : "Didn't do it.";
console.log(result);*/

/*//Comma Operator

let x = 0, y = 10, z;
z = (x++, y++);
console.log(z);*/




//Grouping Opreator
/*//Bitwise Operators

let n = 22;
console.log(n >> 1);
console.log(n >>> 1);
console.log(n = -n);
console.log(n++);
console.log(n >> 1);
console.log(n >>> 1);

const FLAG_READ = 1;
const FLAG_WRITE = 2;
const FLAG_EXECUTE = 4;
let p = FLAG_READ | FLAG_WRITE;
let hasWrite = p & FLAG_WRITE;
let hasExecute = p & FLAG_EXECUTE;
console.log(p ^ FLAG_WRITE);
console.log(p ^ FLAG_WRITE);
const hasReadAndExecute = p & (FLAG_READ | FLAG_EXECUTE);
console.log(hasReadAndExecute);*/


/*//Assignment Operators

let v, v0;
v = v0 = 9.8;
console.log(v);

const nums = [3, 5, 15, 7, 5];
let n, i=0;
while((n = nums[i]) < 10, i++ < nums.length) {
    console.log(`Number less than 10: ${n}.`);
}
console.log(`Number greater than 10 found: ${n}.`);
console.log(`${nums.length} numbers remain.`);*/


//Destructuring Assignment
//const obj = { b: 2, c: 3, d: 4 };
//const {a, b, c} = obj;
//console.log(a);
//console.log(b);
//console.log(c);
//console.log(d);

//let a, b, c;
//{a, b, c} = obj; error
//({a, b, c} = obj);

//const arr = [1, 2, 3];
//let [x, y] = arr;
//console.log(x);
//console.log(y);
//console.log(z); error undefined

/*const arr = [1, 2, 3, 4, 5];
let [x, y, ...rest] = arr;
console.log(x);
console.log(y);
console.log(rest);

let a = 5, b = 10;

[a, b] = [b, a];
console.log(a);
console.log(b);*/

//Object and Array Operators
/*//Expressions in Template Strings
const roomTempC = 21.5;
let currentTempC = 19.5;
const message = `The current temp is ` + `${currentTempC}\u00b0C different than room temperature.`;
const fahrenheit = `The current temperature is ${currentTempC * 9/5 + 32}\u00b0F`;
console.log(message);
console.log(fahrenheit); */

//Expressions and Control Flow Patterns
/*//converting if...else Statements to Conditional Expressions
const n = 5;
function isPrime(n){
    return 5
}

if(isPrime(n)) {
    label = 'prime';
} else {
    label = 'non-prime';
}
//OR
//label = isPrime(n) ? 'prime' : 'non-prime';
console.log(label);*/

//Converting if Statements to Short-Circuted Logical OR Expressions
options = 1;

if(!options) options = { x: 2 
}; else { 
    return console.log(options);};
    
options = options || { x:3 };
console.log(x);

