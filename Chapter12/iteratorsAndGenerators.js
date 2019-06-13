//iterators

/*const book = [
    "Twinkle, twinkle, little bat!", 
    "How I wonder what you're at!", 
    "Up above the world you fly,", 
    "Like a tea tray in the sky.", 
    "Twinkle, twinkle, little bat!", 
    "How I wonder what you're at",
];

const it = book.values();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

let current = it.next();
while(!current.done) {
    console.log(current.value);
    current = it.next();
}
const it1 = book.values();
const it2 = book.values();
console.log(it1);
console.log(it2);
console.log(it1.next());
console.log(it1.next());
console.log(it2.next());
console.log(it1.next());*/

//The Iteration Protocal
/*class log {
    constructor() {
        this.messages = [];
    }
    add(messages) {
        this.messages.push({message, timestamp: Date.now() });
    }
    [Symbol.iterator]() {
        return this.messages.values();
    }
}*/

/*const log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vassel");

for(let entry of log) {
    console.log(`${entry.message} @ ${entry.timestamp}`);
}*/
//const log = new Log();
/*class Log {
    [Symbol.iterator]() {
        let i = 0;
        const messages = this.messages;
        return {
            next() {
                if(i >= messages.length)
                return { value: undefined, done: true };
            return { value: messages[i++], done: false };    
            }
        }
    }
}*/


/*class FibonacciSequence {
    [Symbol.iterator]() {
        let a = 0, b = 1;
        return {
            next() {
                let rval = { value: b, done: false };
                b += a;
                a = rval.value;
                return rval;
            }
        };
    }
}

const fib = new FibonacciSequence();
let i = 0;
for(let n of fib) {
    console.log(n);
    if(++i > 9) break;
}*/

//Generators
/*
function* rainbow() {
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}

const it = rainbow();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for(let color of rainbow()) {
    console.log(color);
} */

//yield Expressiona and Two-Way Communication

/*function* interrogate() {
    const name = yield "What is your name?";
    const color = yield "What is your favorite color?";
    return `${name}'s favotire color is ${color}. `;
}

const it = interrogate();
it.next();
console.log(it.next('Ethan'));
console.log(it.next('orange'));*/

//Generators and return

function* abc() {
    yield 'a';
    yield 'b';
    return 'c';
}
const it = abc(); //in the book it's named count
console.log(it.next());
console.log(it.next());
console.log(it.next());

for(let l of abc()) {
    console.log(l);
}











