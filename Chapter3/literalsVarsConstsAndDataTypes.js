/*//Variables and Constants

let currentTempC = 22;
//let targetTempC; returned undefined. Refer to screenshots

let targetTempC, room1 = "conference_room_a", room2 = "lobby";
//console.log(room2); //I typed this to test if it ran. Uncomment line to run node to test

const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30; */

/*//Literals
let room11 = "conference_room_a"; //I changed the name of this varieble because room 1 was already defined
let currentRoom = room1; */

/*//Primitive Types and Objects
//Numbers
let count = 10;
const blue = 0x0000ff;
const unmask = 0o0022;
const roomTemp = 21.5;
const c = 3.0e6;
const e = -1.6e-19;
const inf = Infinity;
const ninf = -Infinity;
const nan = NaN;
console.log(count);
console.log(blue);
console.log(unmask);
console.log(roomTemp);
console.log(c);
console.log(e);
console.log(nan);

const small = Number.EPSILON;
const bigInt = Number.MAX_SAFE_INTEGER;
const max = Number.MAX_VALUE;
const minInt = Number.MIN_SAFE_INTEGER;
const min = Number.MIN_VALUE;
const ninf2 = Number.NEGATIVE_INFINITY; // Changed the name due to already being defined
const nan2 = Number.NaN;
const inf2 = Number.POSITIVE_INFINITY;
console.log(small);
console.log(bigInt);
console.log(max);
console.log(minInt);
console.log(min);
console.log(nan2);*/

/*//Escaping
/*const dialog = 'Sam looked up, and said "help, old friend!", as Max walked in.';
const imperative = "Don't do that!"; 
console.log(dialog); //error, refer to screenshot "escaping-fail"
const dialog1 = "He looked up and said \"don't do that!\" to Max";
const dialog2 = 'He looked up and said "don\'t do that!" to Max.';
const s = "In JavaScript, use \\ as an escape character in strings.";
console.log(dialog1);
console.log(dialog2);
console.log(s); */

/*//Special Characters

var s = "Line1\nLine2"; //new line
console.log(s);
var r = "Windows line 1\r\nWindows line 2" //carriage return
console.log(r);
const t = "Speed:\t60kph" //tab
console.log(t);
const q = "Don\'t" //single quote
console.log(q);
const dq = 'Sam said \"hello\".'; //double quotes
console.log(dq);
const bt = 'new in es6: \`strings.';
console.log(bt);
//const ds = `new in es6: ${interpolation}`; //dollar sign, runs error because interpolation does not have a value
//console.log(ds);
const bs = "you can \\\\ to represent \\!";//backslash
console.log(bs);
const hex = "test unicode: \u2310(P \u22c0Q)"
console.log(hex);
const latinChar = "\xc9p\xe9e some text"; //latin-1 code
console.log(latinChar);*/

/*//Template Strings
let currentTemp = 19.5;
const message = "The current temp is " + currentTemp + "\u00b0C";
console.log(message);
const message2 = `The current temp is ${currentTemp}\u00b0C`;
console.log(message2);*/

/*//Multiline Strings
const multiline = "lineOne\lineTwo"; 
console.log(multiline); //one line

const realMultiline = "lineOne\n\lineTwo";
console.log(realMultiline);

const backTickMulti = `lineOne
lineTwo`;
console.log(backTickMulti);
const backTickMulti2 = `lineOne
lineTwo
lineThree`;
console.log(backTickMulti2);
const concat = "lineOne\n" + "lineTwo\n" + "lineThree";
console.log(concat);
const currentTemp = 25;
const concatDifTypesStrings = 'Current temp: \n' + `\t${currentTemp}\u00b0C\n` + "Don't worry... the heat is not on!";
console.log(concatDifTypesStrings);*/

/*//Booleans
let heating = true;
let cooling = false;*/

/*//Symbols
const RED = Symbol();
const ORANGE = Symbol("The color of the sunset!");
console.log(RED === ORANGE);*/

/*//null and undefined
let currentTemp;
console.log(currentTemp);
//const targetTemp = null;
//console.log(targetTemp);
//currentTemp = 19.5;
//console.log(currentTemp);
//currentTemp = undefined;
//console.log(currentTemp);*/


/*//Objects

const obj = { color: "yellow"};

obj.size;
obj.color;
console.log(obj.color);

obj["not an identifier"] = 3;
obj["not an identifier"];
obj["color"];

const SIZE = Symbol();
obj[SIZE] = 8;
//obj[SIZE];
console.log(obj[SIZE]);

const sam1 = {
    name: 'Sam',
    age: 4,
};
console.log(sam1);

const sam2 = { name: 'Sam', age: 4 }; //same thig, one line
console.log(sam2); 

const sam3 = {
    name: 'Sam', 
    classification: {
        kingdon: 'Anamalia', 
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'cactun',
    },
};
console.log(sam3);
//Access Sams cat family
sam3.classification.family;
console.log(sam3.classification.family);
sam3["classification"].family;
console.log(sam3["classification"].family);
sam3.classification["family"];
console.log(sam3.classification["family"]);
sam3["classification"]["family"];
console.log(sam3["classification"]["family"]);

sam3.speak = function() { return "Meow!"; };
sam3.speak();
console.log(sam3.speak());
delete sam3.classification;
console.log(sam3);
delete sam3.speak;
console.log(sam3.speak());*/

//Number, String, and Boolean Objects
const s = "hello";
s.toUpperCase();
var sU = s.toUpperCase();
console.log(sU);

s.rating = 3;
s.rating;
var r = s.rating;
console.log(r);