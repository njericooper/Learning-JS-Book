// Review of Arrays
/*const arr1 = [1, 2, 3];
const arr2 = ["one", 2, 3];
const arr3 = [[1, 2, 3], ["one", 2, "three"]];
const arr4 = [
    {
        name: "Fred", type: "object", luckyNumbers: [5, 7, 13] },
    [
        { name: "Suzzie", type: "object" }, 
        { name: "Tyrone", type: "object" },
    ],
    1,
    function() { return "arrays can contain functions too"; },
    "three",
];

console.log(arr1[0]);
console.log(arr1[2]);
console.log(arr3[1]);
console.log(arr4[1][0]);
console.log(arr1.length);
console.log(arr4.length);
console.log(arr4[1].length);
arr1[4] = 5
console.log(arr1[4]);
console.log(arr1);
console.log(arr1.length);
console.log(arr2[10]);
console.log(arr2.length);

const arr5 = new Array();
const arr6 = new Array(1, 2, 3);
const arr7 = new Array(2);
const arr8 = new Array("2");*/


//Array Content Manipulation
//Adding or Removing Single Elements at Beginning or End

/*const arr = ["b", "c", "d"];
console.log(arr);
console.log(arr.push("e"));
console.log(arr.pop());
console.log(arr.unshift("a"));
console.log(arr.shift());*/


//Adding Multiple Elements at the End
/*const arr = [1, 2, 3];

console.log(arr.concat(4, 5, 6));
console.log(arr.concat([4, 5, 6]));
console.log(arr.concat([4, 5], 6));
console.log(arr.concat([4, [5, 6]]));*/


//gettingSubarray

/*const arr = [1, 2, 3, 4, 5];

console.log(arr.slice(3));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice(-2, -1));*/


/*//Adding or Removing Elements at Ant Position
const arr = [1, 5, 7];

console.log(arr.splice(1, 0, 2, 3, 4));
console.log(arr);
console.log(arr.splice(5, 0, 6));
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);
console.log(arr.splice(2, 1, 'a', 'b'));
console.log(arr);*/

/*//Cutting and Replacing Within an Array

const arr = [1, 2, 3, 4,];

console.log(arr.copyWithin(1, 2));
console.log(arr.copyWithin(2, 0, 2));
console.log(arr.copyWithin(0, -3, -1));*/

/*//Filling an Array with a Specific Value
const arr = new Array(5).fill(1);
console.log(arr.fill("a"));
console.log(arr.fill("b", 1));
console.log(arr.fill("c", 2, 4));
console.log(arr.fill(5.5, -4));
console.log(arr.fill(0, -3, -1));*/

//Reversing and Sorting Arrays

/*const arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());
console.log(arr.sort());

const barr = [{ name: "Pixy"}, {name: "Joe" },
    { name: "Devon" }, { name: "Andy" }];
console.log(barr.sort());
console.log(barr.sort((a, b) => a.name > b.name));
console.log(barr.sort((a, b) => a.name[1] < b.name[1]));   */

//Array Searching

/*const o = { name: "Jerry" };
const arr = [1, 5, "a", o, true, 5[1, 2], "9"];
console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));
console.log(arr.indexOf("a"));
console.log(arr.lastIndexOf("a"));
console.log(arr.indexOf({ name: "Jerry" }));
console.log(arr.indexOf(o));
console.log(arr.indexOf[1, 2]);
console.log(arr.indexOf("9"));
console.log(arr.indexOf("a", 5));
console.log(arr.indexOf(5, 5));
console.log(arr.lastIndexOf(5, 4));
console.log(arr.lastIndexOf(true, 3));

const carr = [{ id: 5, name: "Judy" }, { id: 7, name: "Francis" }];
console.log(carr.findIndex(o => o.id === 5));
console.log(carr.findIndex(o => o.name === "Francis"));
console.log(carr.findIndex(o => o === 3));
console.log(carr.findIndex(o => o.id === 17));
console.log(carr.find(o => o.id === 5));
console.log(carr.find(o => o.id === 2));*/

/*const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
console.log(arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))));

class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}
Person.nextId = 0;
const jamie = new Person("Jamie"),
    juliet = new Person("Juliet"), 
    peter = new Person("Peter"),
    jay = new Person("Jay");
const barr = [jamie, juliet, peter, jay];
console.log(barr.find(p => p.id === juliet.id));
console.log(barr.find(p => p.id === this.id, juliet));

const carr = [5, 7, 12, 15, 17];
console.log(carr.some(x => x%2===0));
console.log(carr.some(x => Number.isInteger(Math.sqrt(x))));

const darr = [4, 6, 16, 36];
console.log(darr.every(x => x%2===0));
console.log(darr.every(x => Number.isInteger(Math.sqrt(x))));*/


//The Fundamental Array Operations: maps and filter

//const cart = [{ name:"Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }];
//const names = cart.map(x => x.name);
//const prices = cart.map(x => x.price);
//const discountPrices = prices.map(x => x*0.8);
//const lcNames = names.map(String.toLowerCase);
//console.log(names);
//console.log(prices);
//console.log(discountPrices);
//console.log(lcNames);

/*const items = ["Widget", "Gadget"];
const prices = [9.95, 22.95];
const cart = items.map((x, i) => ({ name: x, price: prices[i]}));
console.log(prices);
console.log(cart);*/

/*const cards = [];
for(let suit of ['H', 'C', 'D', 'S'])
    for(let value=1; value<=13; value++)
        cards.push({ suit, value });

console.log(cards.filter(c => c.value === 2));        
//console.log(cards.filter(c => c.value > 10));
//console.log(cards.filter(c => c.value > 10 && c.suit === 'H'));


//to String
function cardToString(c) {
    const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' };
    const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
    for(let i=2; i<=10; i++) values[i] = i;
    return values[c.value] + suits[c.suit];
}
console.log(cards.filter(c => c.value === 2).map(cardToString));
console.log(cards.filter(c => c.value > 10 && c.suit ==='H' ).map(cardToString));*/

/*//Array Magic: reduce
const arr = [5, 7, 2, 4];
const sum = arr. reduce((a, x) => a += x, 0);
console.log(sum);

const barr = [5, 7, 2, 4];
const sum2 = barr.reduce((a,x) => a += x);
console.log(sum2);


const words = ["Beachball", "Rodeo", "Angel", "Ardvark", "Xylophone", "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];
const alphabetical = words.reduce((a, x) => {
    if(!a[x[0]]) a[x[0]] = [];
    a[x[0]].push(x);
    return a; }, {});
console.log(alphabetical);    

const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
const stats = data.reduce((a, x) => {
        a.N++;
        let delta = x -a.mean;
        a.mean += delta/a.N;
        a.M2 += delta*(x - a.mean);
        return a;
    }, { N: 0, mean: 0, M2: 0 });
if(stats.N > 2) { 
 stats.variance = stats.M2 / (stats.N - 1);
 stats.stdev = Math.sqrt(stats.variance);    
}
console.log(stats);


const wordz = ["Beachball", "Rodeo", "Angel", "Ardvark", "Xylophone", "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];
const longWords = wordz.reduce((a, w) => w.length>6 ? a+ " "+w : a, "").trim();
console.log(longWords);
//Readers Exercise
//Use Filter and Join

const wordd = ["Beachball", "Rodeo", "Angel", "Ardvark", "Xylophone", "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];

const filterWordd = wordd.filter(function(leWord){
    return leWord.length <= 5;
});

const leWordString = filterWordd.join( " ");

console.log(filterWordd);
console.log(leWordString); //IT WORKS!!!!OMFG*/


/*//Array Methods and Deleted or Never-Defined Elements
const arr = [1, 2, 3, 4, 5];
delete arr[2];

console.log(arr.map(x => 0));*/

//String Joining

const arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
console.log(arr.join());
console.log(arr.join(''));
console.log(arr.join('--'));

const attributes = ["Nimble", "Perceptive", "Generous"];
const html = '<ul><li>' + attributes.join('</li><li>') + '</li></ul>';
console.log(attributes);
console.log(html);

