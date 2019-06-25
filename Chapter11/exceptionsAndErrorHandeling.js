

//the Error Object
/*const err = new Error('invalid email');

function validateEmail(email) {
    return email.match(/@/) ?
        email :
        new Error(`invalid email: ${email}`);
} //wont't run. Can't read "match of undefined"*/

//const email = "jane@doe.com";


/*const validatedEmail = validateEmail(email);
if(validatedEmail instanceof Error) {
    console.log(`Error: ${validatedEmail.message}`);
} else {
    console.log(`Valid email: ${validatedEmail}`);
}
console.log(validatedEmail);*/


//Exception Handeling With Try And Catch


/*const email = null;

try {
    const ValidatedEmail = validateEmail(email);
    if(ValidatedEmail instanceof Error) {
        console.error(`Error ${ValidatedEmail.message}`);    
    } else {
        console.log(`Valid email: ${ValidatedEmail}`);
    }
} catch(err) {
    console.error(`Error: ${err.message}`);
}*/

//Throwing Errors

/*const amount = 600;
const payee = "Sam";
const account = {
    balance: 500,
    transfer: 200,
}*/
//console.log(account.balance);


/*function billPay(amount, payee, account) {
    if(amount > account.balance) 
        throw new Error("insufficent funds");
    account.transfer(payee, amount);
}*/
//console.log(billPay()); //error says transfer is not a function



//Exceoption Handeling and the Call Stack
/*
function a() {
    console.log('a: calling b');
    b();
    console.log('a: done');
}
function b() {
    console.log('b: calling c');
    c();
    console.log('b: done');
}
function c() {
    console.log('c throwing error');
    throw new Error('c: throwing error');
    console.log('c: done');
}
function d() {
    console.log('d: calling c');
    c();
    console.log('d: done');
}
try {
    a();
} catch (err) {
    console.log(err.stack);
}
try {
    d();
} catch(err) {
    console.log(err.stack);
}*/

//Try... Catch...Finally
/*try {
    console.log("this line is executed...");
    throw new Error("whoops");
    console.log("this line is not...");
} catch(err) {
    console.log("there was an error...");
} finally {
    console.log("...always executed");
    console.log("perform clean up here");
}*/