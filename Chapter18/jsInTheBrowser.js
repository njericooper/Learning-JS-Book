//Javascript in the browser

//es5 or es6
/*function printDOM(node, prefix) {
    console.log(prefix + node.nodeName);
    for(let i = 0; i<node.childNodes.length; i++) {
        printDOM(node.childNodes[i], prefix + '\t');
    }
}
printDOM();*/  //document not defined

//Some Tree Terminology
//ancestor
//grandparent
//parent
//child

//DOM "Get" Methods
document.getElementById('content');
const callouts = document.getElementsByClassName('callout');
const paragraphs = document.getElementsByTagName('p');

//Queryung DOM Elements
//document.querySelectorAll('.callout');

//Manipulating DOM Elements
/*var go = window.onload = function getAllP() {
    var para1 = document.getElementsByTagName('p');
    para1.textContent = "Modified HTML file";
    alert(para1.textContent);
    var para = document.createElement("P");
    para.innerHTML = "<i>Modified</i> HTML file.";
    document.getElementById("content").appendChild(para);
}*/

//Creating new DOM Elements

/*var go2 = window.onload = function getAllP() {
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    p1.textContent = "I was created dynamically!";
    p2.textContent = "I was also created dynamically!";
    const parent = document.getElementById('content');
    const firstChild = parent.childNodes[0];
    parent.insertBefore(p1, firstChild);
    parent.appendChild(p2);
}*/


//styling Elements

//var go3 = window.onload = 

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

//go3();

function removeParaHighlights () {
    const paras = document.querySelectorAll('.highlight');
    for(let p of paras) {
        p.classList.remove('highlight');
    }
}

//Data Attributes

const highlightActions = document.querySelectorAll('[data-action="highlight"]');


highlightActions[0].dataset;

highlightActions[0].dataset.containing = "giraffe";
highlightActions[0].dataset.caseSensitive = "true";

//Events


const highlightActions = document.querySelectorAll('[data-action="highlight"]'); for(let a of highlightActions) {
    a.addEventListener('click', evt => {
        evt.preventDefault();
        highlightParas(a.dataset.containing);
    }); 
}


const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
for(let a of removeHighlightActions) { a.addEventListener('click', evt => {
        evt.preventDefault();
        removeParaHighlights();
    });
}

function doTheThing() {
    const highlightActions = document.querySelectorAll('[data-action="highlight"]'); 
    for(let a of highlightActions) {
        a.addEventListener('click', evt => {
            evt.preventDefault();
            highlightParas(a.dataset.containing);
        }); 
    }
}
