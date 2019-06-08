//Every function has a body
function sayHello() {
    console.log("Hello World!")
}

sayHello();

//Return Values
function getGreeting() {
    return "Hello World!";
}

getGreeting();

//Calling Versus Referencing

getGreeting(); //"Hello World!"
getGreeting; // function getGreeting()

const f = getGreeting;
f(); //"Hello, World!"

const o = {};
o.f();

const arr = [1, 2, 4];
arr[1] = getGreeting;
arr[1]();

//FUNCTOIN ARGUMENTS

function avg(a,b) {
    return (a + b)/2;
}
avg(5,10);

const a = 5, b = 10;
avg(a, b);

function f(x) {
    console.log(`inside f: x${x}`);
    x = 5;
    console.log(`inside f: x=${x} (after assignmant)`);
}

let x = 3;
console.log(`before calling f: x${x}`);
f(x);
console.log(`after calling f: x${x}`);

function f(o){
    o.message = `set in f (previous value: '${o.message}')`;
}
let o = {
    message: "initial value"
};
console.log(`before calling f: o.message= "${o.message}"`);
f(o);
console.log(`after calling f: o.message="${o.message}"`);

function f(o) {
    o.message = "set in f";
    o = {
        message: "new object!"
    };
    console.log(`inside f: o.message="${o.message}" (after assignment)`);
}
let o = {
    message: 'initial value'
};
console.log(`before calling f: o.message= "${o.message}"`);
f(o);
console.log(`after calling f: o.message="${o.message}"`);

//Deconstructing Arguments
function getSentence({ subject ,verb, object }){
    return `${subject} ${verb} ${object}`;
}
const o = {
    subject: "I", 
    verb: "love", 
    object: "JavaScript",
};

getSentence(o);
//destructure arrays
function getSentence([subject, verb, object]){
    return`${subject} ${verb} ${object}`;
}
const arr = [ "I", "love", "JavaScript"];
getSentence(arr);

//spread operator
function addPrefix(prefix,...words) {
    const prefixedWords = [];
    for(let i=0; i<words.length; i++){
        prefixedWords[1] = prefix + words[i];
    }
    prefixedWords;
}
addPrefix("con", "verse", "vex");
//when arguments aren't defined, the default will be undefined

//Functions as Properties of Objects

const o = {
    name: 'Wallace',
    bark: function() { return 'Woof!' ;},
}

const o = {
    name: 'Wallace',
    bark() { return 'woof!'},
}

//The this Keyword
const o = {
    name: 'Wallace', 
    speak() { return `My name is ${this.name}!`},
}

o.speak();

const speak = o.speak;
speak === o.speak;
speak();

const o = {
    name: 'Julie',
    greetBackwards: function() {
        function getReverseName() {
            let nameBackwards = '';
            for(let i=this.name.length-1; i>=0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym , olleH`;
    },
};
o.greetBackwards();

const o = {
    name: 'Julie',
    greetBackwards: function() {
        const self = this;
        function getReverseName() {
            let nameBackwards = '';
            for(let i=self.name.length-1; i>=0; 1--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym , ollH`;
    },
};
o.greetBackwards();

//Arrow Notation

const f1 = function() { return "hello!"; }
//OR
const f1 = () => "hello!";

const f2 = function(name) {return `Hello, ${name}!`; }
//OR
const f2 = name => `Hello, ${name}!`;

const f3 = function(a, b) {return a + b; }
//OR
const f3 = (a,b) => a + b;

const o = {
    name: 'Julie',
    greetBackwards: function(){
    const getReverseName = () => {
        for(let i=this.name.length-1; i>=0; i--) {
            nameBackwards += this.name[i];
        }
        return nameBackwards
    };
    return `${getReverseName()} si eman ym , ollH`;
    },
};
o.greetBackwards();

//call, apply, and bind
const bruce = {name: "Bruce"};
const madeline = { name: "Madeline" };

function greet() {
    return `hello, I'm ${this.name}!`;
}

greet();
greet.call(bruce);
greet.call(madeline);

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
update.call(madeline, 1942, 'actress');

update.apply(bruce, [1955, "actor"]);
update.apply(madeline, [1918, "writer"]);

const arr = [2, 3, -5, 15, 7];
Math.min.apply(null, arr);
Math.max.apply(null, arr);

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce);
Math.min(...arr);
Math.max(...arr);

const updateBruce = update.bind(bruce);
updateBruce.call(madeline, 1274, "king");
const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");