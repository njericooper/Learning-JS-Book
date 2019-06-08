/*//Variables and Constants

let currentTempC = 22;
//only use let once

constTempC = 22.5;

//declare multiple variables with same let statement

let targetTempC, room1 = "conference_room_a", room2 = "lobby";

const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;*/

//literals

/*let room1 = "conference_room_a";

let currentRoom = room1;

let currentRoom = conference_room_a;*/

//Numbers

let count = 10;
const blue = 0x0000ff;
const umask = 0o0022;
const roomTemp = 21.5;
const c = 3.0e6;
const e = -1.63-19;
const inf = Infinity;
const ninf = -Infinity;
const nan = NAN;

//corresponding Number Objects

const small = Number.EPSILON;
const bigInt = Number.MAX_SAFE_INTEGER;
const minInt = Number.MIN_SAFE_INTEGER;
const min = Number.MIN_VALUE;
const nInf = Number.NEGATIVE_INFINITY;
const nan = Number.NaN;
const inf = Number.POSITIVE_INFINITY;

//Escaping

const dialog = 'Sam loked up, and said "hello, old friend!", as Dequan walked in.';
const imperative = "Don't do that!";

//escape quotes with a backlash

const dialog1 = "He looked up and said \"don't do that!\" to Max.";
const dialog2 = 'He looked up and said "don\'t do that!" to Max.';
const s = "In Javascript, use \\ as an escape character in strings.";

//Template Strings

let currentTemp = 19.5;
const message = "the current temp is " + currentTemp + "\u00b0C";
const message2 = `The current temp is ${currentTemp}\u00b0C`;

//Multiline Strings

const multiline = "line1\
line2";

const multiline = "line1\n\
line2";

const multiline = "line1\n" +
    "line2\n" +
    "line3";

//Objects

const obj = {};

obj.color = "yellow";
obj["not an identifier"] = 3;
obj["not an identifier"];
obj["color"];

const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE];

const sam1 ={
    name: 'Sam',
    age: 4,
};

const sam2 = { name:'Sam', age: 4};

const sam3 = {
    name: 'Sam',
    classification: {
        kingdom: 'Anamlia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subFamily: 'Felinae',
        genus: 'Felis',
        species: 'catus'
    },
};

sam3.classification.family;
sam3["classification"].family;
sam3["classification"]["family"];

sam3.speak = function() {return "Meow!"; };

sam3.speak();

//deteting a property
delete sam3.classification;
delete sam3.speak;

//Numbers, String, and Boolean Objects

const s = "hello";
s.toUpperCase();
s.rating = 3;
s.rating;

//Arrays 
const a1 = [1, 2, 3, 4];
const a2 = [1, 'two', 3, null];
const a3 = [
    "What the hammer? What the chain?",
    "In what furnace was thy brain?",
    "what the anvil? What the dread grasp",
    "Dare its terrors clasp?",
];
const a4 = [
    { name: "Ruby", hardness: 9 },
    { name: "Diamond", hardness: 10 },
    { name: "Topaz", hardness: 8 },
];
const a5 = [
    [1, 3, 5],
    [2, 4, 6],
];

const arr = ['a', 'b', 'c'];
arr.length;
arr[0];
arr[arr.length - 1];

const arr = [1, 2, 'c, 4, 5'];
arr[2] = 3;

//Data Type Conversion

//converting to Numbers
const numStr = "33.3";
const num = Number(numStr);
const a = parseInt("16 volts", 10);
const b = parseInt("3a", 16);
const c = parseFloat("15.5 kph");
//date
const d = new Date();
const ts = d.valueOf();

//converting to String
const n = 33.5;
n;
const s = n.toString();
s;

const arr = [1, true, "hello"];
arr.toString();

const n = 0;
const b1 = !!n;
const b2 = Boolean(n);
