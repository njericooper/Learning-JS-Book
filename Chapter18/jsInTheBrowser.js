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
//document.getElementById('content');
//const callouts = document.getElementsByClassName('callout');
//const paragraphs = document/getElementsByTagName('p');

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

var go3 = window.onload = function highlightParaz(containing) {
    if(typeof containing === 'string')
        let containing = new RegExp(`\\b${containing}\\b`, 'i');
    const paraz = document.getElementsByTagName('p');
    console.log(paraz);
    for(let p of paraz) {
        if(!containing.test(p.textContent)) continue;
        p.classList.add('highlight');
    }   
}
highlightParaz('unique');

go3();

funciton removeParaHighlights() {
    const paras = document.querySelectorAll('p.highlight');
    for(let p of paras) {
        p.classList.remove('highlight');
    }
}