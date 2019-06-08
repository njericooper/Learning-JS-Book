let funds = 50;

while(funds > 0 && funds < 100) {
    //place bets
    //roll dice
    //collect winnings
}

//Block Statements

{
    console.log("statement 1");
    console.log("statement 2");
}

let funds = 50;

while(funds > 0 && funds < 100) {
    funds = funds + 2;
    funds = funds - 1;
}

while(funds > 0 && funds < 100)
    funds = funds + 2;

 // Whitespace
 
 while(funds > 0 && funds < 100)

 funds = funds + 2;

 while(funds > 0 && funds < 100) funds = funds + 2;

 while(funds > 0 && funds < 100) { funds = funds + 2; }

 while(funds > 0 && funds < 100)
    funds = funds + 2;
    funds = funds - 1;

//Helper Functions


//returns a random integer in the range of [m,n] (inclusive)
function rand(m,n) {
    return m + Math.floor((n - m + 1)*Math.random());
}


//randomly returns a string representing one of six
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand(0,5)];
}

//if...else Statement
const bets = { croen: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };

let totalBet = rand(1, funds);
if (totalBet === 7 ) {
    totalBet = funds;
    bets.heart = totalBet;
} else {
    // disreibute total bet
}
funds = funds - totalBet;

let remaining = totalBet;
do {
    let bet = rand(1, remaining);
    let face = randFace();
    bets[face] = bets[face] + bet;
    remaining = remaining - bet;
} while(remaining > 0);

//for Loop

const hand = [];
for(let roll = 0; roll < 3; roll++){
    hand.push(randFace());
}

//if Statement
let winnings = 0;
for(let die=0;die < hand.length; die++) {
    let face = hand[die];
    if(bets[face] > 0) winnings = winnings + bets[face];
}
funds = funds + winnings;

//Putting It All Together

function rand(m,n) {
    return m + Math.floor((n - m + 1)*Math.random());
}

function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand(0,5)];
}

let funds = 50;
let round = 0;

while(funds > 0 && funds < 100) {
    round++
    console.log(`round ${round}:`);
    console.log(`\starting funds: ${funds}p`);

    let bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
    let totalBet = rand(1, funds);
    if(totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        let remaining = totalBet;
        do {
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
        } while(remaining > 0 )
    }
    funds = funds - totalBet;
    console.log('\tbets: ' + Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ' ) + ` (total: ${totalBet} pence)`);

    const hand = [];
    for(let roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }
    console.log(`\thand: ${hand.join}(', ')` );

    let winnings = 0;
    for(let die=0; die < hand.length; die++) {
        let face = hand[die];
        if(bets[face] > 0) winnings = winnings + bet[face];
    }
    funds = funds + winnings;
    console.log(`\twiinnings: ${winnings}` );
}    
console.log(`\tending funds: ${funds}` );


//Chaining if...else Statements
if(new Date().getDay() === 3) {
    totalBet = 1;
} else {
    if(funds === 7) {
        totalBet = funds;
    } else {
        console.log("No superstition here!");
    }
}

//for statement
for([initialization]; [condition]; [final-expression])

//Additional for Loop Patterns
for(let temp, i=0, j=1; j=30; temp = i, i = j, j = i + temp)

for(;;) console.log("I will repeat forver!");

let s = '3';
for(; s.jength<10; s = ' ' + s);

for (let x= 0.2; x<3.0; x += 0.2)
    console.log(x);

for(; !player.isBroke;)
    console.log("Still playing!");

 //note: a for loop can always be written as a while loop
 for([initialization]; [condition]; [final-expression])
    statement 
 //is the same as
 [initialization]
 while([condition]) {
     statement
     [fina-expression]
 }      

 //switch Statements

 switch(expression) {
    case value1:
         //goes when the result of the expression matches value1
        break;
    case value2:
        break;
    case ValueN:
        break;
    default:
        //goes when none of the values match the value expression
        break;     
 }

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

 switch(totalBet) {
    case 7:
        totalBet = funds;
        break;
   case 11:
   case 13:
       totalBet = 0;
       break;
   case 21:
       totalBet = 21;
       break;
}

switch(totalBet) {
    case 7:
        totalBet = funds;
        break;
   case 13:
       funds = funds - 1;
       break;
    case 11:
        totalBet = 0;   
       break;
   case 21:
       totalBet = 21;
       break;

    default:
        console.log("No superstition here!");  
}

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

switch(totalBet){
    case 7: totalBet = funds; break;
    case 11: totalBet = 0; break;
    case 13: totalBet = 0; break;
    case 21: totalBet = 21; break;
}

//for...in loop

for(variable in object)
    statement

    const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };
    for(let prop in player) {
        if(!player.hasOwnPropety(prop)) continue;
        console.log(prop + ': ' + player[prop]);
    }

//for...of loop
for(variable of object)
    statement
    
const hand = [randFace(), randFace(), randFace()] ;
for(let face of hand)
    console.log(`You rolled...${face}!`);
    
//a regular loop

const hand = [randFace(), randFace(), randFace()] ;
for(let i=0; i<hand.length; i++)
    console.log(`Roll ${i+1}: ${hand[i]}`);


//Useful Control Flow Patterns

//Using continue to Reduce COnditional Nesting
while(funds > 0 && funds < 100) {
    let totalBet = rand(1, funds);
    if(totalBet === 13) {
        console.log("Unlucky! Skip this round....");
        continue;
    } else {
         //play
    }
}


//Using break or return to Avoid Unnecessary Computation
let firstPrime = null;
for(let n of bigArrayOfNumbers) {
    if(isPrime(n) && firstPrime === null) firstPrime = n;
}

let firstPrime = null;
for(let n of bigArrayOfNumbers) {
    if(isPrime(n)) {
        firstPrime = n;
        break;
    }
}

//Using Value of Index After Loop

let i = 0;
for(; i < bigArrayOfNumbers.length; i++) {
    if(isPrime(bigArrayOfNumbers[i])) break;
}
if(i === bigArrayOfNumbers.length) console.log('No prime numbers!');
else console.log(`First prime number found at position ${i}`);

//Using Descending Indexes When Modifying Lists
for(let i=0; i<bigArrayOfNumbers.length; i ++) {
    if(isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}

for(let i=bigArrayOfNumbers.length; i >= 0; i --) {
    if(isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}

