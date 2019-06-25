
//A Control Flow Primer
/*//While Loops
let funds = 50;
while(funds > 1 && funds < 100) {
    // place bets
    // roll dice
    // collect winnings

}
console.log(funds);*/

/*//Block Statements

let funds = 50;

while(funds > 1 && funds < 100) {
    funds = funds + 2;
    funds = funds - 1;
}
console.log(funds);
while(funds > 1 && funds < 100)
    funds = funds + 2;
console.log(funds);*/   

/*//Whitespace
let funds = 50;
//while(funds > 1 && funds < 100)

//funds = funds + 2;
//console.log(funds);
//no new line
//while(funds > 1 && funds < 100) funds = funds +2;
//console.log(funds);

//no newline, block with one statement
//while(funds > 1 && funds < 100) { funds = funds + 2; }
//console.log(funds);

while(funds > 1 && funds < 100)
    funds = funds +2;
    funds = funds -1;
console.log(funds);    

while(funds > 1 && funds < 100)
    funds = funds + 2;

funds = funds - 1;    
console.log(funds);*/


/*//Helper Functions

function rand(m, n) {
    return m + Math.floor((n - m + 1)*Math.random());
}

function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand(0, 5)];
} // Nothing to return, chapter says "We'll come back to these"

//if...else Statement
funds = 50;

const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamonds: 0 };
let totalBet = rand(1, funds);
if(totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
} else {
    //distribute total bet it'll be a if..else loop
}
funds = funds - totalBet;
console.log(totalBet);
 
// do...While Loop
let remaining = totalBet;
do {
    let bet = rand(1, remaining);
    let face = randFace();
    remaining = remaining - bet;
} while(remaining > 0);
console.log(remaining); //not a whole number, but we haven't gotten to Math.floor or ceil

//for Loop
const hand = [];
for(let roll = 0; roll < 3; roll++) {
    hand.push(randFace()); 
}*/

/*//if Statement

let winnings = 0;
for(let die=0; die < hand.length; die++) {
    let face = hand[die];
    if(bets[face] > 0) winnings = winnings + bets[face]
}
funds = funds + winnings;
console.log(funds);*/

/*// Putting it All Together
function rand(m, n) {
    return m + Math.floor((n - m + 1)*Math.random());
}

function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand(0, 5)];
}

let funds = 50;
let round = 0;

while(funds > 1 && funds < 100) {
    round++
    console.log(`round ${round}:`);
    console.log(`\tstarting funds: ${funds}p`);
    //place bets
    let bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
    let totalBet = rand(1, funds);
    if(totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        //distribute total bet
        let remaining = totalBet;
        do {
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
        } while(remaining > 0)
    }
    funds = funds - totalBet;
    console.log('\tbets: ' + Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(',') + `(total: ${totalBet} pence)`);

    //roll dice
    const hand = [];
    for(let roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }
    console.log(`\thand: ${hand.join(', ')}`);

    //collect winnings
    let winnings = 0;
    for(let die=0; die < hand.length; die++) {
        let face = hand[die];
        if(bets[face] > 0) winnings = winnings + bets[face];
    }
    funds = funds + winnings;
    console.log(`\twinnings: ${winnings}`);
}
console.log(`\tending funds: ${funds}`);*/







/*//Controll Flow Statements in Javascript

//Chaining if...else Statements
const funds = 8;
if(new Date().getDay() === 3) {
    totalBet = 1;
} else {
    if(funds === 7){
        totalBet = funds;
    } else {
        console.log("No superstition here!");
    }
}

//OR

if(new Date().getDay === 3) {
    totalBet = 1;
} else {
    if(funds === 7) {
        totalBet = funds;
    } else {
        console.log("No superstition here!");
    }
}

//Additional for Looping Patterns

//for(let temp, i=0, j=1; j<30; temp = i, i = j, i + temp)
//    console.log(j);

let s = '3';
for(; s.length<10; s = ' ' + s);

for(let x=0.2; x<3.0; x += 0.2)
    console.log(x);

//for(; !player.isBroke;)
//    console.log("still playing!"); //player is not deefined*/

//switch Statements

/*const totalBet = 50;
const funds = 25;

switch(totalBet) {
    case 7:
        totalBet = funds;
        break;
    case 11:
        totalBet = 0;
        break;
    case 13:
        totalBet = 0;
        break;
    case 21:
        totalBet = 21;
        break;            
}
console.log(totalBet);    */

/*const totalBet = 13;

switch(totalBet) {
    case 7:
        totalBet = funds;
        break;
     case 11:
     case 13:
         totalBet = 0;
         break;
    case 21:
        totalBet = 22;
        break;            
}

console.log(totalBet);  */

/*totalBet = 2;

switch(totalBet) {
    case 7:
        totalBet = funds;
        break;
    case 13: 
    funds = funds -1;
    case 11:
        totalBet = 0;
        break;
    case 21:
        totalBet = 21;
        break;
    default:
        console.log("No supetstition here!");
        break;            
}
console.log(totalBet);  */

/*totalBet = 7;
funds = 3;

function adjustBet(totalBet, funds) {
    switch(totalBet) {
        case 7:
            return funds;
        case 13:
            return 0;
        default:
            return totalBet;    
    }
}

// Or With no WhiteSpace

switch(totalBet) {
    case 7: totalBet = funds; break;
    case 11: totalBet = 0; break;
    case 13: totalBet = 0; break;
    case 21: totalBet = 21; break;
}
console.log(totalBet);*/

//for... in loop
/*const player = { name: 'Thomas', rank: 'Midsipman', age: 25 };
for(let prop in player) {
    if(!player.hasOwnProperty(prop)) continue;
    console.log(prop + ': ' + player[prop]);
}

const hand = [randFace(), randFace(), randFace()];
for(let i=0; i<hand.length; i++)
    console.log(`Roll ${i+1}: ${hand[i]} `);*/



/*//Useful Control Flow Patterns
//Reduce to continue nesting

function rand(m, n) {
    return m + Math.floor((n - m + 1)*Math.random());
}

function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand(0, 5)];
}

let funds = 50;
let round = 0;


while(funds > 1 && funds < 100) {
    let totalBet = rand(1, funds);
    if(totalBet === 13) {
        console.log("Unlucky! Skip this round...");
    } else {
        //play
    }
} // this wont sop looping

//flattened with continue
while(funds > 1 && funds < 100) {
    let totalBet = rand(1, funds);
    if(totalBet === 13) {
        console.log("Unlucky! Skip this round...");
        continue;
    }
    //play
}//this is still an infinite loop

console.log(funds);*/

//Using break or return to Avoid Unnecessary Computation


let firstPrime = null;
var bigArrayOfNumbers = [];

const n = 1;
function isPrime(n) {
    for(var i = 2; i < n; i++)
      if(n % i === 0) return false;
    return n > 1;
}

let i = 0;
 for(; i < bigArrayOfNumbers.length; i++) {
     if(isPrime(bigArrayOfNumbers[i])) break;
 }

for(let n of bigArrayOfNumbers) {
    if(isPrime(n) && firstPrime === null) firstPrime = n;
}

for(let n of bigArrayOfNumbers) {
    if(isPrime(n)) {
        firstPrime = n;
        break;
    }
}
console.log(firstPrime);


console.log(isPrime(n)); //array has to be iterable
if(i === bigArrayOfNumbers.length) console.log('No prime numbers!');
else console.log(`First prime number found at position ${i}`);


//Using Value Index After Loop


for(; i < bigArrayOfNumbers.length; i++) {
    if(isPrime(bigArrayOfNumbers[i])) break;
}
if (i === bigArrayOfNumbers.length) console.log('No prime numbers');
else console.log(`first prime number found at position ${i}`);


//Using Descending Indexes When Modifying Lists

for(let i=0; i<bigArrayOfNumbers.length; i++) {
    if(isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i,1);
}

for(let i=bigArrayOfNumbers.length-1; i >=0; i--){
    if(isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}

console.log(bigArrayOfNumbers.length);
 