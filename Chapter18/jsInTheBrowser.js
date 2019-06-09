function printDOM(node, prefix) {
    console.log(prefix + node.nodeName);
    for(let i=0; i<node.childNodes.length; i++) {
        printDOM(node.childNodes[i], prefix + '\t');
    }
}
printDOM(document, '');

//Creating new DOM Elemants
const p1 = document.createElement('p');
const p2 = document.createElement('p');
p1.textContent = "I was created dynamically!";
p2.textContent = "Its lit that I just learned this.";

const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];

parent.insertBefore(p1, firstChild);
parent.appendChild(p2);

//Styling Elements

function highlightParas(containing) {
    if(typeof containing === 'string')
        containing = new RegExp(`\\b${containing}\\b`, 'i');
    const paras = document.getElementsByTagName('p');
    console.log(paras);
    for(let p of paras) {
        if(!containing.test(p.textContent)) continue;
        p.classList.add('highlight');
    }
}
highlightParas('unique');

//Data Attributes
//added buttons in HTML
function removeParaHighlights() {
    const paras = document.querySelectorAll('p.highlight');
    for(let p of paras) {
        p.classList.remove('highlight');
    }
}

const highlightActions = document.querySelectorAll('[data-action="highlight]');

highlightActions[0].dataset;

//Events

for(let a of highlightActions) {
    a.addEventListener('click', evt => {
        evt.preventDefault();
        highlightParas(a.dataset.containing);
    });
}
const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
for(let a of removeHighlightActions) {
    a.addEventListener('click', evt => {
        evt.preventDefault();
        removeParaHighlights();
    });
}

//Event Capturing and Bubbling

function logEvents(handlerName, type, cancel, stop, stopImmediate) {
    return function(evt) {
        if(cancel) evt.preventDefault();
        if(stop) evt.stopPropagation();
        if(stopImmediate) evt.stopImmediatePropagation();
        console.logo(`${type}: ${handlerName}` + (evt.defaultPrevented ? ' (canceled)' : ''));
    }
}

function addEventLogger(elt, type, action) {
    const capture = type === 'capture';
    elt.addEventListener('click', logEvent(elt.tagName, type, action==='cancel',  action==='stop', action==='stop!'), capture);
}
const body = document.querySelector('body');
const div = document.querySelector('div');
const button = document.querySelector('button');

addEventLogger(body, 'capture');
addEventLogger(body, 'bubble');
addEventLogger(div, 'capture');
addEventLogger(div, 'bubble');
addEventLogger(button, 'capture');
addEventLogger(button, 'bubble');

//Ajax
const http = require('http');
const server = http.createServer(function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify({
        platform: process.platform,
        nodeVersion: process.version, 
        uptime: Math.round(process.uptime()),
    }));
});
const port = 7070;
server.listen(port, function(){
    console.log(`Ajax server started on port ${port}`);
});

const debug = require('debug')('main');
debug("starting");

let lastMessage;

module.exports = function(prefix) {
    return function(message) {
        const now = Date.now();
        const sinceLastMessage = now -(lastMessage || now);
        console.log(`${prefix} ${message} +${sinceLastMessage}ms`);
        lastMessage = now;
    }
}

const debug1 = require('./debug')('one');
const debug2 = require('./debug')('one');

debug1('started first debugger!')
debug2('started second debugger!')

setTimeout(function() {
    debug1('after some time..');
    debug2('what happens?')
}, 200);

//File Access System
const fs = require('fs');
fs.readdir(_dirname, function(err, files) {
    if(err) return console.error('Unable to read directory contents');
    console.log(`Contents of ${_dirname}:`);
    console.log(files.map(f => '\t' + f).join('\n'));
});

//Process
const fs = require('fs');
fs.readdir('data', function(err, files) {
    if(err) {
        console.erroe("fatal error: couldn't read data directory.");
        process.exit(1);
    }
    const txtFiles = files = files.filter(f => /\.txt$/i.test(f));
    if(txtFiles.length === 0) {
        console.log("No . txt files to process.");
        process.exit(0);
    }
});

//Operating Systems

const os = require('os');

console.log("Hostname: " + os.hostname());
console.log("OS type: " + os.type());
console.log("OS Platform: " + os.platform());

//Child Processes

const exec = require('child_process').exec;
exec('dir', function(err, stdout, stderr) {
    if(err) return console.error('Error executins "dir"');
    stdout - stdout.toString();
    console.log(stdout);
    stderr = stderr.toString();
    if(stderr !== ''){
        console.error('error');
        console.error(stderr);
    }
});

//Streams
const ws = fs.createWriteStream('stream.txt', { encoding: 'utf8' });
ws.write('line 1/n');
ws.write('line 2\n');
ws.end();

//Web Servers

const http = require('http');
const server = http.createServer(function(req, res) {
    console.log(`${req.method} ${req.url}`);
    res.end('Hello world');
});
const port = 8000;
server.listen(port, function(){
    console.log(`server started on port ${port}`);
});

const server = http.createServer(function(req, res) {
    if(req.method === 'GET' && req.url === '/favicon.ico'){
        const fs = require('fs');
        fs.createReadStream('favicon.ico');
        fs.pipe(res);
    } else {
        console.log(`${req.method} ${req.url}`);
        res.end('Hello world');
    }
});