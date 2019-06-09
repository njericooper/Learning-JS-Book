//Callbacks
console.log("Before timeout: " + new Date());
function f() {
    console.log("After timeout: " + new Date());
}
setTimeout(f, 60*1000);
console.log("I happen after setTimeout of one minute!");
console.log("Me too!");
// we'd normally use an anonymous function
setTimeout(function() {
    console.log("After timeout: " + new Date());
}, 60*1000);

const start = new Date();
let i=0;
const intervalId = setInterval(function() {
    let now = new Date();
    if(now.getMinutes() !== start.getMinutes() || ++i>10)
        return clearInterval(intervalId);
    console.log(`${i}: ${now}`);
}, 5*1000);

//Scope and Asynchronous Execution

function countdown() {
    let i;
    console.log("Countdown: ");
    for(i=5; i>=0; --i) {
        setTimeout(function() {
            console.log(i===0 ? "GO!" : i);
        }, (5-i)*1000);
    }
}
countdown();

function countdown() {
    console.log("Countdown: ");
    for(let i=5; i>=0; --i) {
        setTimeout(function() {
            console.log(i===0 ? "GO!" : i);
        }, (5-i)*1000);
    }
}
countdown();

//Error-First Callbacks
const fs = require('fs');

const fname = 'may_or_may_not_exist.txt';
fs.readFile(fname, function(err, data) {
    if(err) return console.error(`error reading file ${fname}: ${err.message}`);
    console.log(`${fname} contents: ${data}`);
});

//Callback Hell
const fs = require('fs');

fs.readFile('a.txt', function(err, dataA) {
    if(err) console.error(err);
    fs.readFile('b.txt', function(err, dataB) {
        if(err) console.error(err);
        fs.readFile('b.txt', function(err, dataC){
            if(err) console.error(err);
            setTimeout(function() {
                fs.writeFile('d.txt', dataA+dataB+dataC, function(err) {
                    if(err) console.error(err);
                });
            }, 60*1000);
        });
    });
});

//instead 
const fs = require('fs');
function readSketchyFile() {
    try {
        fs.readFile('does_not_exist.txt', function(err, data) {
            if(err) throw err;
        });
    } catch(err) {
        console.log('warning: minor issue occured, program continuing');
    }
}
readSketchyFile();

//Promises
//Creating Promises
function countdown(seconds) {
    return new Promise(function(resolve, reject) {
        for(let i=seconds; i>=0; i--) {
            setTimeout(function() {
                if(i>0) console.log(i + '...');
                else resolve(console.log("GO!"));
            }, (seconds-i)*1000);
        }
    });
}

//Using Promises
countdown(5).then(
    function() {
        console.log("countdown completed successfully");
    },
    function(err) {
        console.log("countdown experienced an err: " + err.message); 
    }
);

const p = countdown(5);
p.then(function() {
    console.log("couontdown completed successfully");
});
p.catch(function(err) {
    console.log("countdown experienced an error: " + err.message);
});

//Events

const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }
    go() {
        const countdown = this;
        return new Promise(function(resolve, reject) {
            for(let i=countdown.seconds; i>=0; i--) {
                setTimeout(function() {
                    if(countdown.superstitious && i===13)
                        return reject(new Error("DEFF NOT COUNTING THAT "));
                    countdown.emit('tick', i);
                    if(i===0) resolve();
                }, (countdown.seconds-i)*1000);
            }
        });
    }
}

const c = new Countdown(5);

c.on('tick', function(i) {
    if(i>0) console.log(i + '...');
});
c.go()
    .then(function() {
        console.log('GO!');
    })
    .catch(function(err) {
        console.error(err.message);
    })

    //the superstitious timer 
const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }
    go() {
        const countdown = this;
        const timeoutIds = [];
        return new Promise(function(resolve, reject) {
            for(let i=countdown.seconds; i>=0; i--) {
                timeoutIds.push(setTimeout(function() {
                    if(countdown.superstitious && i==13) {
                        //clear all pending timeouts
                        timeoutIds.forEach(clearTimeout);
                        return reject(new Error("DEF NOT COUNTING THAT"));
                    }countdown.emit('tick', i);
                    if(i===0) resolve();
                }, (countdown.seconds-i)*1000));
            }
        });
    }
}

//Promise Chaining 
function launch() {
    return new Promise(function(resolve, reject) {
        console.log("Lift off!");
        setTimeout(function() {
            resolve("in orbit!");
        }, 2*1000);
    });
}

//or chain functions together like this
const c = new Countdown(5)
    .on('tick', i => console.log(i + '...'));

c.go()
    .then(launch)
    .then(function(msg) {
        console.log(msg);
    })
    .catch(function(err){ 
    console.error("Houston ,we have a problem...");
    })

//Preventing Unsettled Promised

function launch() {
    return new Promise(function(resolve, reject) {
        if(Math.random() < 0.5) return;
        console.log("lift off!");
        setTimeout(function() {
            resolve("In Orbit!");
        }, 2*1000);
    });
}

function addTimeout(fn, timeout) {
    if(timeout === undefined) timeout = 1000;
    return function(...args) {
        return new Promise(function(resolve, reject) {
            const tid = setTimeout(reject, timeout, new Error("promise times out"));
        fn(...args)
            .then(function(...args) {
                clearTimeout(tid);
                resolve(...args);
            })
            .catch(function(...args) {
                clearTimeout(tid);
                reject(...args);
            });    
        });
    }
}

c.go()
    .then(addTimeout(launch, 4 *100))
    .then(function(msg) {
        console
        .loog(msg);
    })
    .catch(function(err) {
        console.error("We got a problem yo: " + err.message);
    });

    //Generators
    function* theFutureIsNow() {
        const dataA = yield nfcall(fs.readFile, 'a.txt');
        const dataB = yield nfcall(fs.readFile, 'b.txt');
        const dataC = yield nfcall(fs.readFile, 'c.txt');
        yield ptimeout(60*1000);
        yield nfcall(fs.writeFile, 'd.txt', dataA+dataB,dataC);
    }

    //Exception Handeling in Generator Runners

    function* theFutureIsNow() {
        let data;
        try {
            data = yield Promise.all([
                nfcall(fs.readFile, 'a.txt'),
                nfcall(fs.readFile, 'b.txt'),
                nfcall(fs.readFile, 'c.txt'),
            ]);
        } catch(err) {
            console.error("Unable to read one more input files: " + err.message);
            throw err;
        }
        yield ptimeout(60*1000);
        try {
            yield nfcall(fs.writeFile, 'd.txt', data[0]+data[1]+data[2]);
        } catch(err) {
            console.err("Unable to write output file: " + err.message);
            throw err;
        }
    }