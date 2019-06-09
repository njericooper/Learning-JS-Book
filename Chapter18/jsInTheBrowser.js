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