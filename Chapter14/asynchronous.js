//Asynchronous Programming

/*console.log("Before timeout:" + new Date());
function f() {
    console.log("After timeout: " + new Date());
}
setTimeout(f, 60*1000);
console.log("I happen after setTimeout!");
console.log("Me too!");

setTimeout(function() {
    console.log("After timeout: " + new Date());
}, 60*1000);*/

//console.log(setTimeout());

// setInterval and clearInterval

/*const start = new Date();
let i = 0;
const intervalId = setInterval(function() {
    let now = new Date();
    if(now.getMinutes() !== start.getMinutes() || ++i>10)
        return clearInterval(intervalId);
    console.log(`${i}: ${now}`);
}, 5*1000);

console.log(intervalId); */

//scope and asynchronus Execution

/*function countdown() {
    console.log("Countdown:");
    for(let i=5; i>=0; i--) {
        setTimeout(function() {
            console.log(i==0 ? "GO!" : i);
        }, (5-i)*1000);
    }
}
console.log(countdown());

const fs = require('fs');

const fname = 'may_or_may_not_exist.txt';
fs.readFile(fname, function(err, data) {
    if(err) return console.error(`error reading file ${fname}: ${err.message}`);
    console.log(`${fname} contents: ${data}`);
});

console.log(fname);*/

//Callback Hell

//const fs = require('fs');

/*fs.readFile('a.txt', function(err, dataA) {
    if(err) console.error(err);
    fs.readFile('b.txt', function(err, dataB) {
        if(err) console.error(err);
        fs.readFile('c.txt', function(err, dataC) {
            if(err) console.err(err);
            setTimeout(function() {
                fs.writeFile('d.txt', dataA+dataB+dataC, function(err) {
                    if(err) console.err(err);
                });
            }, 60*1000);
        });
    });
});
console.log(fs);*/
/*function readSketchyFile() {
    try {
        fs.readFile('does_not_exist.txt', function(err, data) {
            if(err) throw err;
        });
    } catch(err) {
        console.log('warning: minor issue occured, program continuing');
    }
}
console.log(readSketchyFile());*/

// creating promises
/*function countdown(seconds) {
    return new Promise(function(resolve, reject) {
        for(let i=seconds; i>0; i--){
            setTimeout(function() {
                if(i>0) console.log(i + '...');
                else resolve(console.log("GO!"));
            }, (seconds-i)*1000);
        }
    });
}*/
//console.log(countdown(10)); 

/*countdown(5).then(
    function() {
        console.log("countdown completed succesfully");
    }, 
    function(err) {
        console.log("countdown experienced an error: " + err.message);
    }
)*/

/*const p = countdown(5);
p.then(function() {
    console.log("countdown completed successfully");
});
p.catch(function(err) {
    console.log("countdown experienced an error: " + err.message);
});

console.log(p);*/


/*unction countdown(seconds) {
    return new Promise(function(resolve, reject) {
        for(let i=seconds; i>0; i--) {
            setTimeout(function() {
                if(i===13) return reject(new Error("DEF NOT COUNTING THAT"));
                if(i>0) console.log(i + '...');
                else resolve(console.log("GO!"))
            }, (seconds-i)*1000);
        }
    });
}

console.log(countdown(13));*/



///Events

/*const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }
    go() {
        const countdown = this;
        return new Promise(function(resolve, reject) {
            for(let i=countdown.seconds; i>0; i--) {
                setTimeout(function() {
                    if(countdown.superstitious && i ===13)
                        return reject(new Error("DEF NOT COUNTING THAT"));
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


const d = new Countdown(15, true)
    .on('tick', function(i) {
        if(i>0) console.log(i + '...');
    });
    
d.go()
    .then(function() {
        console.log('GO!');
    })    
    .catch(function(err) {
        console.error(err.message);
    })*/

/*const EventEmitter = require('events').EventEmitter;

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
                    if(countdown.superstitious && i===13) {
                        timeoutIds.forEach(clearTimeout);
                        return reject(new Error("DEF NOT OCUNTING THAT"));
                    }
                    countdown.emit('tick', i);
                    if(i===0) resolve();
                }, (countdown.seconds-i)*1000));
            }
        });
    }
}

const c = new Countdown(14);

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
*/

// Promise Chaining

/*const EventEmitter = require('events').EventEmitter;

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
                    if(countdown.superstitious && i===13) {
                        timeoutIds.forEach(clearTimeout);
                        return reject(new Error("DEF NOT OCUNTING THAT"));
                    }
                    countdown.emit('tick', i);
                    if(i===0) resolve();
                }, (countdown.seconds-i)*1000));
            }
        });
    }
}*/

/*function launch() {
    return new Promise(function(resolve, reject) {
        console.log("Lift off!");
        setTimeout(function() {
            resolve("In orbit!");
        }, 2*1000);
    });
}*/

//const c = new Countdown(5)
//    .on('tick', i => console.log(i + '...'));

    /*c.go()
        .then(launch)
        .then(function(msg) {
            console.log(msg);
        })
        .catch
        (function(err) {
            console.error("HOUSTON, we have a problem...");
        })*/

// Preventing Unsettled Promises

/*function launch() {
    return new Promise(function(resolve, reject) {
        if(Math.random() < 0.5) return;
        console.log("Lift off!");
        setTimeout(function() {
            resolve("In orbit!");
        }, 2*1000);
    });
}



function addTimeout(fn, timeout) {
    if(timeout === undefined) timeout = 1000;
    return function(...args) {
        return new Promise(function(resolve, reject){
            const tid = setTimeout(reject, timeout, 
                new Error("promise timed out"));
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
    .then(addTimeout(launch, 4*1000))
    .then(function(msg) {
        console.log(msg);
    })
    .catch(function(err) {
        console.error("Houston, we have a problem: " + err.message);
    });
*/

//Generators

function nfcall(f, ...args) {
    return new Promise(function(resolve, reject) {
        f.call(null, ...args, function(err, ...args) {
            if(err) return reject(err);
            resolve(args.length<2 ? [0] : args);
        });
    });
}

function ptimeout(delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, delay);
    });
}

   


