//The Error Object

function validationEmail(email) {
    return email.match(/@/) ?
        email :
        new Error(`invalid email: ${email}`);
}

//Exception Handeling with try and catch

const email = null;

try {
    const validationEmail = validationEmail (email);
    if(validationEmail instanceof Error) {
        console.error(`Error: ${validatedEmail.message}`);
    } else {
        console.log(`Valid email: ${validatedEmail}`);
    }
} catch(err) {
    console.log(`Error: ${err.message}`);
}

//Throwing Errors

function billPay(amount, payee, account) {
    if(amount > account.balance)
        throw new Error("insufficient finds");
    account.transfer(payee, amount);    
}

//Exception Handeling and the call stack
function a() {
    console.log(`a: calling b`);
    b();
    console.log('a: done');
}
function b() {
    console.log('b: calling c');
    c();
    console.log('b: done');
}
function c() {
    console.log('c: throwing error');
    throw new Error('c: throwing error');
    throw new Error('c error');
    console.log('c: done');
}
function d() {
    console.log('d: calling c');
    c();
    console.log('d: done');
}
try {
    a();
} catch(err) {
    console.log(err.stack);
}

try {
    d();
} catch(err) {
    console.log(err.stack);
}

//try catch finally
try {
    console.log("this line is executed... " );
    throw new Error("whoops");
    console.log("this line is not...");
} catch(err) {
    console.log("there was an error...");
} finally {
    console.log("...alwayse executed");
    console.log("perform cleanup here");
}