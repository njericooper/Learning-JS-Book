//Substring matching and replacing

/*const input = "As I was going to Saint Ives";
console.log(input.startsWith("As"));
console.log(input.endsWith("Ives"));
console.log(input.startsWith("going"), 9);
console.log(input.endsWith("going", 14));
console.log(input.includes("going"));
console.log(input.includes("going", 10));
console.log(input.indexOf("going"));
console.log(input.indexOf("going", 10));
console.log(input.indexOf("nope"));
console.log(input.toLocaleUpperCase("as"));
const output = input.replace("going", "walking");
console.log(output);*/

// Constructing Regular Expressions
/*const re1 = /going/;
const re2 = new RegExp("going");
console.log(re1);
console.log(re2);*/

//Searching with Regular Expressions
/*const input = "As I was going to Saint Ives";
const re = /\w{3,}/ig;
console.log(input.match(re));
console.log(input.search(re));
console.log(re.test(input));
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input));
console.log(input.match(/\w{3,}/ig));
console.log(input.search(/\w{3,}/ig));
console.log(/\w{3,}/ig.test(input));
console.log(/\w{3,}/ig.exec(input));*/

//Replacing with Regular Expressions

/*const input = "As I was going to Saint Ives";
const output = input.replace(/\w{4,}/ig, '****');
console.log(input);
console.log(output);*/

//Alternation

//const html = 'HTML with <a href="/one">one link</a,>, and some JavaScript.'+ '<script src="stuff.js"></script>';
//const matches = html.match(/<area|<a|<link|<script|<source/ig);
//console.log(matches);

// Matching HTML

/*const html = '<br> [!CDATA[[<br>]';
const matches = html.match(/<br>/ig);
console.log(matches);*/

//Character Sets
/*const beer99 = "99 bottles of bear on the wall " + "take 1 down and pass it around -- " + "98 bottles of beer on the wall.";
const matches = beer99.match(/0|1|2|3|4|5|6|7|8|9|/g);
const m1 = beer99.match(/[0123456789]/g);
const m2 = beer99.match(/[0-9]/g);
const match = beer99.match(/[\-0-9a-z.]/ig);
const match2 = beer99.match(/[^\0-9a-z.]/ig);
console.log(beer99);*/

//Named Character Sets
/*const stuff = 
    'hight:     9\n' +
    'medium:    5\n' +
    'low:       2\n';
const levels = stuff.match(/:\S*[0-9]/g); //the\s means zero or more whitespace

const messyPhone = '(505) 555-1515';
const neatPhone = messyPhone.replace(/\D/g, '');
console.log(neatPhone);

const field = '    something    ';
const valid = /\S/.test(field);
console.log(valid);*/

//Repitition
/*const match3 = beer99.match(/[0-9][0-9][0-9][0-9][0-9][0-9]/);
const match4 = beer99.match(/[0-9]+/);
console.log(match3);
console.log(match4);*/

//The Period Metacharacter and escaping
/*const input = "Adress: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.";
const match6 = input.match(/\d{5}.*); // took slash out so I coul's comment this line

const equation = "(2 + 3.5) * 7";
const match5 = equation.match(/\(\d \+ \d\.\d\) \* \d/);

console.log(match5);

console.log(input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>'));*/

// Grouping 
/*const text = "Visit oreilly.com today!";
const match = text.match(/[a-z]+(?:\.com|\.org|\.edu)/i);
console.log(match);

const html = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n' + '<link rel="stylesheet" href="https://secure.com/securestuff.css">\n' + 'link rel="stylesheet" href="//anything.com/flexble.css">';

const matches = html.match(/(?:https?)?\/\/[a-z][a-z0-9-]+[a-z0-9]+/ig);

//Lazy Matches, Greedy Matches

const input = "Regix pros know the difference between\n" + "<i>greedy</i> and <i>lazy</i> matching.";

console.log(input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>'));

console.log(input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>'));*/

// Backreferences

/*const promo = "Openinf for XAAX is the dynamic GOOG! At the box office now!";
const bands = promo.match(/(?:[A-Z])(?:[A-Z])\2\1/g);

const html = `<img alt='A "simple" example.'>` + `<img alt="Don't abuse it!">`;
const matches = html.match(/<img alt=(?:['"]).*?\1/g);

console.log(bands);
console.log(matches);*/

//Replacing Groups

let html = '<a class ="nope" href="/yep">Yep</a>';
html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>'); 
console.log(html);

let html2 = '<a class="yep" href="/yep" id="nope">Yep</a>';
html2 = html2.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, '<a $2 $1>');
console.log(html2);

const input = "One two three";
console.log(input.replace(/two/, '($`)'));
console.log(input.replace(/\w+/g, '($&)'));
console.log(input.replace(/two/, "($')"));
console.log(input.replace(/two/, "($$)"));





