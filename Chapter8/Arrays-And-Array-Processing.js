//A Review of Arrays

//array literals
const arr1 = [1, 2, 3];
const arr2 = ["one", 2, "three"];
const arr3 = [[1, 2, 3], ["one", 2, "three"]];
const arr4 = [
    { name: "fred", type: "object", luckyNumbers: [5, 7, 13]},
    [
        { name: "Susan", type:"object" },
        { name: "Anthony", type: "object" },
    ],
    1,
    function() { return "arrays can contain functoins too"; },
    "three",
];
//accessing elements
arr1[0];
arr1[2];
arr3[1];
arr4[1][0];
//array length
arr1.length;
arr4.length;
arr4[1].length;
//increasing array size
arr1[4] = 5;
arr1;
arr1.length;
//accessing (not assigning) an inxed larger than the array
//does *not* change the size of the array
arr2[10];
arr2.length; //3
//Array constructor
const arr5 = new Array();
const arr6 = new Array(1, 2, 3);
const arr7 = new Array(2);
const arr8 = new Array("2");

//Array Content manipulatoin
//Adding or Removing Single Elements at Beginning or End
const arr = ["b", "c", "d"];
arr.push("e");
arr.pop();
arr.unshift("a");
arr.shift();

//Adding Multiple Elements

const arr = [1, 2, 3];
arr.concat(4, 5, 6);
arr.concat([4, 5, 6]);
arr.concat([4, 5], 6);
arr.concat([4, [5, 6]]);

//Getting a Subarray

const arr = [1, 2, 3, 4, 5];
arr.slice(3);
arr.slice(2, 4);
arr.slice(-2);
arr.slice(1, -2);
arr.slice(-2, -1);

//adding or removing elements at any position
const arr = [1, 5, 7];
arr.splice(1, 0, 2, 3, 4);
arr.splice(1, 2);
arr.slice(2, 1, 'a', 'b');

//cutting and Replacing Within an Array

const arr = [1, 2, 3, 4];
arr.copyWithin(1, 2);
arr.copyWithin(2, 0, 2);
arr.copyWithin(0, -3, -1);

//Filling an Array with an Specific Value
const arr = new Array(5).fill(1);
arr.fill("a");
arr.fill("b", 1);
arr.fill("c", 2, 4);
arr.fill(5.5, -4);
arr.fill(0, -3, -1);

//Reversing and Sorting Arrays

const arr = [1, 2, 3, 4, 5];
arr.reverse();

const arr = [{ name: "Suz" }, { name: "Jim" }, { name:
"Trevor" }, { name: "Amanda" }];
//sorted alphabtically by name
arr.sort((a, b) => a.name > b.name ? 1 : -1);
//sorted in reverse by second
arr.sort((a, b) => a.name[1] < b.name[1] ? 1 : -1);

//Array Searching
const o = { name: "Jerry" };
const arr = [1, 5, "a", o, true, 5 [1, 2], "9"];
arr.indexOf(5);
arr.lastIndexOf(5);
arr.indexOf("a");
arr.lastIndexOf("a");
arr.indexOf({ name: "Jarry" });
arr.indexOf(o);
arr.indexOf([1, 2]);
arr.indexOf("9");
arr.indexOf(9);

arr.indexOf("a", 5);
arr.indexOf(5, 5);
arr.lastIndexOf(5, 4);
arr.lastIndexOf(true, 3);

const arr = [{ id: 5, name: "Judith"}, { id: 7, name: "Frances"}];
arr.findIndex(o => o.id === 5);
arr.findIndex(o => o.name === "Francis");
arr.findIndex(o => o === 3);
arr.findIndex(o => o.id === 17);

const arr = [{ id: 5, name: "Judith"}, {id: 7, name: "Francis"}];
arr.find(o => o.id === 5);
arr.find(o => o.id === 2);

const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
arr.find((x, i) => i > 2 && Number.isInteger(math.sqrt(x)));

class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}
Person.nextId = 0;
const jamie = new Person("Jamie"),
    juliet = new Person("Juliet"),
    jay = new Person("Jay"),
    peter = new Person("Peter");
const arr = [jamie, juliet, peter, jay];

arr.find(p => o.id === juliet.id);
arr.find(function(p) { return p.id === this.id }, juliet);


const arr = [5, 7, 12, 15, 17];
arr.some(x => x%2===0);
arr.some(x = Number.isInteger(Math.sqrt(x)));

//The Fundamental Array Operations: map and filter

const cart = [ { name: "Widget", price: 9.995 }, { name:"Gadget", price: 22.95}];
const names = cart.map(x => x.name);
const prices = cart.map(x => x.price);
const discountPrices = prices.map(x => x*0.8);
const lcNames = names.map(name => name.toLocaleLowerCase());

//create a deck of playing cards
const cards = [];
for(let suit of ['H', 'C', 'D', 'S'])
    for(let value=1; value<=13; value++)
        cards.push({ suit, value });
 // get all cards with value 2
 cards.filter(c => c.value === 2);
 cards.filter(c => c.value > 10);
 cards.filter(c => c.value > 10 && c.suit === 'H');
 
 function cardToString(c) {
     const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660'  };
     const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K'};

     for(let i=2; i<)
 }
