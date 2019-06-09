//Subtracting Matching and Replacing

const input = "As I was going to Saint Ives";
input.startsWith("As")
input.endsWith("Ives")
input.startsWith("going", 9)
input.includes("going")
input.indexOf("going")

//to change the string use string.ptototype.replace
const output = input.replace("going", "walking");

//Construting Regular Expressions
const re1 = /going/;
const re2 = new RegExp("going");

//Searching with Expressions

const input = "As I was going to Sait Ives";
const re = /\w{3,}/ig;

input.match(re);
input.search(re);

re.text(input);
re.exec(input);
re.exec(input);
re.exec(input);
re.exec(input);
re.exec(input);

//Replacing with Regular Expressions
const input = "As I was going to Saint Ives";
const output = input.replace(/\w{4,}/ig, '****');

//Alternation
const html = 'HTML with <a href="/one"> one link</a> ans some JavaScript.' + '<script src = "stuff.js"></script>';
const matches = html.match(/area|a|link|script|source/ig);

//matching HTML
const html = '<br> [!CDATA[[<br>]]';
const matches = html.match(/<br>/ig);

//character sets

const beer99 = "99 bottles of beer on the wall " + "take 1 down and pass it around --" + "98 bottles of beer on the wall.";
const matches = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
const m1 = beer99.match(/[0123456789]/g);
const m2 = beer99.match(/[0-9]/g);
const match = beer99.match(/[\-009a-z.]/ig);

//Named Character Sets
const stuff = 
    'height:    9\n' +
    'medium:    5\n' +
    'low:       2\n';
const levels = stuff.match(/:\s*[0-9]/g);
const messyPhone = '(505) 555-1515'
const neatPhone = messyPhone.replace(/\D/g, '');
const feild = ' something ';
const valid = /\S/.test(field);

//Repetition
const match = beer99m.match(/[0-9][0-9][0-9][0-9][0-9]/);
const match = beer99.match(/[0-9]+/)

//The Period Metacharacter and Escaping
//to escape ANY special regex character, prefix it with a backslash
const equation = "(2 + 3.5) * 7 ";
const match = equation.match(/\(\d \+ \d\.\d\) \* \d/);

//Grouping
const text = "Visit oreilly.com today";
const match = text.match(/[a-z]+(?:\.com|\.org|\.edu)/i);

//Lazy Matches, Greedy Matches
const input = "Regex pros know the difference betreen\n" + "<i>greedy</i> and <i>lazy</i> matching.";

//input.replace(/<i>(.*?)</i>/ig, '<strong>$1</strong>'); // string literal error

//Backreferences
const promo = "Oprating for XAXX is the dynamic GOOG! At the bpx office now!";
const bands = promo.match(/([A-Z])(A-Z)\2\1/g);
const html = `<img alt='A "simple" example.'>` + `<img alt = "Don't abuse it!">`;
const matches = html.match(/<img alt=(['"]).*?\1/g);

//Replacing Groups
let html = '<a class= "nope" href="/yep">Yep</a>';
html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');

let html = '<a class= "yep" href="/yep" id="nope">Yep</a>';
html = html.replace(/<a .*?(class=".*?")(href=".*?").*?>/, '<a $2 $1>');

const input = "One two three";
input.replace(/two/, '($ )');
input.replace(/\w+/g, '($&)');
input.replace(/two/, "($' )");
input.replace(/two/, "($$)");

//Function Replacements

function sanitizeATag(aTag) {
    const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i);
    const attributes = parts[1]
        .split(/\s+/);
    return '<a>' + attributes
        .filter(attr => /^(?:class|id|href)[\s=]/i.test(attr))
        .join(' ')
        +'>'
        + parts[2]
        + '</a>'
}
//Anchoring
const input = "It was the best of times, it was the worst ot times";
const beggining = input.match(/^\w+/g);
//multiline option

const input = "One line\nTwo lines\nThree lines\nFour";
const begginings = input.match(/^\w+/mg);
const endings = input = input.match(/w+$/mg);

//Word BOundary Matching
const inputs = [
    "john@doe.com", 
    "john@doe.com is my email", 
    "my email is john@doe.com", 
    "use john@doe.com, my email", 
    "my email:john@doe.com",
];

const emailMatcher = 
    /\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;
inputs.map(s => s.replace(emailMatcher, '<a href= "mailto:$&">$&</a>'));

//Loolaheads
function validPass(p) {
    return /[A-Z]/.test(p) &&
        /[0-9]/.test(p) &&
        /[a-z]/.test(p) &&
        !/[^a-zA-Z0-9]/.test(p);
}
function validPass(p) {
    return /[A-Z].*[0-9][a-z]/.test(p);
}
function validPassword(p) {
    return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?!.*[^a-zA-Z0-9])/.test(p);
}
