/*var x = 4;
function f(x) {
    return x + 3;
}
console.log(f(5));
console.log(x);*/

/*//Lexical Versus Dynamic Scoping
function f1() {
    console.log('one');
}

function f2() {
    console.log('two');
}
console.log(f2());
console.log(f1());
console.log(f2());

const x = 3;
function f() {
    console.log(x);
    console.log(y);
}
const y = 3;
console.log(f());*/

/*//Global Scope
let name = "Irena";
let age = 25;
function greet() {
    console.log(`Hello, ${name}!`);
}
function getBirthYear() {
    return new Date().getFullYear() - age;
}
console.log(greet());
console.log(getBirthYear());

let user = {
    name: "Shawty",
    age: 25,
};

function greet2() {
    console.log(`Sup, ${user.name}!`);
}
function getBurfYear() {
    return new Date().getFullYear() - user.age;
}
console.log(greet2);
console.log(getBurfYear);

const user2 = {
    name: "kugkhgh",
    age: 25,
};

function saySup() {
    console.log(`Howdy ${user2.name}!`);
}
function yearBorn() {
    return new Date().getFullYear() - user2.age;
}
console.log(saySup());
console.log(yearBorn());*/

//Block Scope

/*console.log('before block');
{
    console.log('inside block');
    const x = 3;
}
console.log(`outside block; x=${x}`);*/

//Variable Masking
/*{
    const x = 'blue';
    console.log(x);
}
console.log(typeof x);
{
    const x = 3;
    console.log(x);
}
console.log(typeof x); //error x is undefined*/

/*{
    let x = 'blue';
    console.log(x);
    {
        let x = 3;
        console.log(x);
    }
    console.log(x);
}
console.log(typeof x); //x is still undefined*/

/*{
    let x = { color: "blue" };
    let y = x;
    let z = 3; 
    {
        let x = 5;
        console.log(x);
        console.log(y.color);
        y.color = "red";
        console.log(z);
    }
    console.log(x.color);
    console.log(y.color);
    console.log(z);
}*/

/*//Functions, Closures, and Lexical Scope

let globalFunc;
{
    let blockVar = 'a';
    globalFunc = function() {
        console.log(blockVar);
    }
}
console.log(globalFunc());

let f;
{
    let o = { note: 'Safe' };
    f = function() {
        return o;
    }
}
let oRef = f();
oRef.note = "not so safe after all!"
console.log(oRef);*/

/*//Immediatley Invoked Function Expressions

const message = (function() {
    const secret = "I'm a secret!";
    return`The secret is ${secret.length} characters long.`;
})();
console.log(message);

const f = (function() {
    let count = 0;
    return function() {
        return `I have been called ${++count} time(s)`;
    }
})();
console.log(f());
console.log(f());*/

/*// Function Scope and Hoisting

let var1;
let var2 = undefined;
console.log(var1);
console.log(var2);
//console.log(undefinedVar); undefined

//x; error undefined
//let x = 3;
//console.log(x);

var x = 3;
console.log(x);

var y;
y;
y = 3;
console.log(y);

if(z !== 3) {
    console.log(w);
    var w = 5;
    if(z === 5) {
        var z = 5;
    }
    console.log(w);
}
if(x === 3) {
    console.log(y);
}

var a = 4;
if(a === 4) {
    var a = 2;
    console.log(a);
}
console.log(a);*/

/*//function Hoisting

f();
function f() {
    console.log('f');
}
console.log(f());
g();
let g = function() {
    console.log('g');
}
console.log(g()); //Error g is not a defined*/

/*//The Temporal Dead Zone

if(typeof x === "undefined") {
    console.log("x doesn't exist or is undefined");
} else {
    //safe to refer to x
}
let x = 5; // results in error
console.log(x);*/

//Strict Mode

(function() {
    'use strict'

    //all code here

})


