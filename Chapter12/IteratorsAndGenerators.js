//The Iteration Protocal

class Log {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push({ message, timestamp: Date.now() });
    }
}

class Log {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push({ message, timestamp: Date.now() });
    }
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
        //return this.messages.values();
    }
}


//Generators
// when you call a generator, you get back an iterator
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
it.next();
it.next();
it.next();
it.next();
it.next();
it.next();
it.next();
it.next();

//OR

for(let color of rainbow()) {
    console.log(color);
}

//yield Expressiona and Two-Way Communicatin

function* interrogate() {
    const name = yield "What is your name?";
    const color = yield "What is your favorite color?";
    return `${name}'s favorite color is ${color}.`;
}

const it = interrogate();
it.next();
it.next('Ethan');
it.next('orange');