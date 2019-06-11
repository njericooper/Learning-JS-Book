/*function sayHello() {
    console.log("Hello");
    console.log("sup?");
    console.log("Yo.");
    console.log("Howdy!");
}
console.log(sayHello());

//Return Values

function getGreeting(){
    return "Hello world!";
}
console.log(getGreeting());

//Calling Versus Referencing
console.log(getGreeting());
console.log(getGreeting);
const f = getGreeting;
console.log(f());
const o = {};
o.f = getGreeting;
console.log(o.f());
const arr = [1, 2, 3];
arr[1] = getGreeting;
arr[1]();
console.log(arr[1]());*/

/*//Function Arguments

function avg(a, b) {
    return (a + b)/2;
}
console.log(avg(5, 10));

const a = 5, b = 10;
avg(a, b);
console.log(avg(a, b));

function f(x) {
    console.log(`inside f: x=${x}`);
    x = 5;
    console.log(`inside f: x=${x} (after assignment)`);
}
let x = 3;
console.log(`before calling f: x=${x}`);
f(x);
console.log(`after calling f: x=${x}`);

function f(o) {
    o.message = `set in f: (previous value: '${o.message}')`;
}
let o = {
    message: "initial value"
};
console.log(`before calling f: o.message="${o.message}"`);
f(o);
console.log(`after calling f: o.message="${o.message}"`);

function f(p){
    p.message = "set in f";
    p = {
        message: "mew object"
    };
    console.log(`inside f: p.message"${p.message}" (after assignment)`);
}
let p = {
    message: 'initial message'
};
console.log(`before calling f: p.message="${p.message}"`);
f(p);
console.log(`after calling f: p.message="${p.message}"`);*/

/*//Do Arguments make the function

function f(x){
    return `in f: x=${x}`;
}
console.log(f());*/


//Destructuring Arguments

/*function getSentence({ subject, verb, object }) {
    return `${subject} ${verb} ${object}`;
}
const o = {
    subject: "I",
    verb: "love", 
    object: "JavaScript",
};
console.log(getSentence(o));*/
/*function getSentence([ subject, verb, object ]) {
    return `${subject} ${verb} ${object}`;
}
const arr = [ "I", "love", "JaveScript" ];
console.log(getSentence(arr));

function addPrefix(prefix, ...words) {
    const prefixedWords = [];
    for(let i=0; i<words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}
addPrefix("con", "verse", "vex");
console.log(addPrefix());*/

/*//Default Arguments
function f(a, b = "default", c = 3) {
    return `${a} - ${b} - ${c}`;
}
console.log(f(5, 6, 7));
console.log(f(5, 6));
console.log(f(5));
console.log();*/

/*//Functions as Properties of Objects
const o = {
    name: 'Wallace',
    bark: function() { return 'Woof!' },
}
console.log(o);
const p = {
    name: 'Dequan', 
    bark() { return 'Woof!'; },
}
console.log(p);*/

//The this Keyword

/*const o = {
    name: 'Shaquita', 
    speak() { return `Aye, lil jawn. My name is ${this.name}!` },
}
console.log(o.speak());

const speak = o.speak;
console.log(speak === o.speak);
console.log(speak());*/

/*const o = {
    name: ' Gucci Mane', 
    greetBackwards: function() {
        function getReverseName() {
        let nameBackwards = '';
        for(let i=this.name.length-1; i>=0; i--) {
            nameBackwards += this.name[i];
        }
        return nameBackwards;
    }
    return `${getReverseName()} si eman ym ,olleH`;
},
};
console.log(o.greetBackwards());*/ //Did not work because "this" is undefined

/*const o = {
    name: ' Gucci Mane', 
    greetBackwards: function() {
        const self = this;
        function getReverseName() {
            let nameBackwards = '';
            for(let i=self.name.length-1; i>=0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    },
};
console.log(o.greetBackwards());*/

//Function Expressions and Anonymous Functions
//recursion
/*const g = function f(stop) {
    if(stop) console.log('f stopped');
    f(true);
};
g(false);
console.log(g(false)); //Inf Loop*/


//Arrow Notation

/*//const f1 = function() { return "hello"; }
const f1 = () => "hello!";
console.log(f1);
//const f2 = function(name) { return `Hello, ${name}!`; }
//console.log(f2);
const f2 = name => `Helo, ${name}!`;
console.log(f2);
//const f3 = function(a, b) { return a + b; }
//console.log(f3);
const f3 = (a,b) => a + b;
console.log(f3);

const o = {
    name: 'Juanita',
    greetBackwards: function() {
        const getReverseName = () => {
            let nameBackwards = '';
            for(let i=this.name.length-1; i>0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        };
        return `${getReverseName()} is eman ym ,olleH`;
    },
}
console.log(o.greetBackwards());*/

//call, apply, and bind

const bruce = { name:"Bruce Bruce" };
const matilda  = { name: "Matilda" };
function greet() {
    return`Hello, I'm ${this.name}`;
}
console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(matilda));

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}
update.call(bruce, 1999, 'r&b singer');

update.call(matilda, 2003, 'sad kid');

update.apply(bruce[1995, "actor"]);
update.apply(matilda, [1998, "kindergardener"]);

//const arr = [2, 3, -5, 15, 7];
//Math.nim.apply(null, arr);
//Math.max.apply(null, arr);

const updateBruce = update.bind(bruce);

updateBruce(1904, "actor;")
console.log(bruce);
updateBruce.call(matilda, 1274, "king");
console.log(bruce);

updateBruce1997 = update.bind(bruce, 1997);
updateBruce1997("Wild Wild West Movie Camio");
console.log(bruce);

