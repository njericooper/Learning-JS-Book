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

    lets bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
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