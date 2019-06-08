function f(x) {
    return x + 3;
}
f(x);
x;

//Lexical Versus Dynamic Scoping
function f1(){
    console.log('one');
}
function f2() {
    console.log('two');
}
f2();
f1();
f2();

const x = 3;

function f() {
    console.log(x);
    console.log(y);
}
{ //new scope
    const y = 5;
    f();
}

//Global Scope

let name = "Elinor";
let age = 25;

function greet(){
    console.log(`Hello, ${name}!`);
}
function getBirthYear(){
    return new Date().getFullYear() - age;
}

let user = {
    name: "Elinor",
    age: 25,
};
function greet() {
    console.log(`hello, ${user.name}!`);
}
function getBirthYear() {
    return new Date().getFullYear() - user.age;
}

function greet(user) {
    console.log(`Hello, ${user.name}`);
}

function getBirthYear(user) {
    return new Date().getFullYear() - user.age;
}

//Block Scope
console.log('before block');
{
    console.log('inside block');
    const x = 3;
    console.log(x);
}
console.log(`outside block; block; x=${x}`);

//Vairable Masking
{
    // block 1
    const x = 'blue';
    console.log(x);
}
console.log(typeof x); 
{
    // block 2
    const x = 3;
    console.log(x);
}
console.log(typeof x);

{
    //outer block
    let x = 'blue';
    console.log(x);
    {
        //inner block
        let x = 3;
        console.log(x);
    }
    console.log(x);
}
console.log(typeof x);

//Functions, Closures, and Lexical Scope
let globalFunc;
{
    let blockVar = 'a';
    globalFunc = function() {
        console.log(blockVar);
    }
}
globalFunc();

//Immediatley Invoked Function Expressions

(function() {
    //this is the IIFE body
})();

const message = (function() {
    const secret = "I'm a secret!";
    return `The secret is ${secret.length} characters long.`;
})();
console.log(message);

const f = (function() {
    let count = 0;
    return function() {
        return`I have been called ${++count} times.`;
    }
})();
f();

//Function Scoping and Hoisting

let var1;
let var2 = undefined;
var1;
var2;
undefinedVar;

x;
let x = 3;
x;
var x = 3;
x;

var x;
x;
x = 3;
x;

if(x !==3) {
    console.log(y);
    var y = 5;
    if(y === 5) {
        var x = 3 ;
    }
    console.log(y);
}
if(x === 3) {
    console.log(y);
}

//Function Hoisting
f();
function f() {
    console.log('f');
}

f();
let f = function() {
    console.log('f');
}

//The Temporal Dead Zone

if(typeof x === "undefined") {
    console.log("x doesn'e exist or its undefind");
} else {
    // safe to refer to x...
}

if(typeof x === "undefined") {
    console.log("x doesn'e exist or its undefind");
} else {
    // safe to refer to x...
}
let x = 5;

//Strict Mode
(function()  {
    'use strict';
    //strict mode won't contaminate the scripts here
})();