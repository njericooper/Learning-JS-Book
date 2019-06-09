//Accessor Properties:Getters and Setters

const USER_EMAIL = Symbol();
class User {
    setEmail(value) {
        if(!/@/.test(value)) throw new Error (`invalid email: ${value}`);
        this[USER_EMAIL] = value;
    }
    getEmail() {
        return this[USER_EMAIL];
    }
}

const u = new User ();
u.setEmail("john@doe.com");
console.log(`User email: ${u.email}`);

const User = Symbol();
class User {
    set email(value) {
        if(!/@/.test(value)) throw new Error (`invalid email: ${value}`);
        this[USER_EMAIL] = value;
    }
    get email() {
        return this [USER_EMAIL];
    }
}

//Proxies

const coefficients = {
    a: 1, 
    b: 2, 
    c: 5,
};

function evaluate(x, c) {
    return c.a + c.b * x + c.c * Math.pow(x, 2);
}

const coefficients = {
    a: 1, 
    c: 3,
};

const betterCoefficents = new new Proxy(coefficients, {
    get(target, key) {
        if(!/^[a-z]$/.test(key)) return target[key];
        return target[key] || 0;
    },
});

const cook = {
    name: "Walt",
    redPhosphorus: 100,
    water: 500,
};

const protectedCook = new Proxy(cook, {
    set(target, key, value){
        if(key === 'redPhosphorus'){
            if(target.allowDangerousOperations)
                return target.redPhosphorus = value;
            else
                return console.log("Too dangerous!");
        }
        target[key] = value;
    },
});

protectedCook.water = 500;
protectedCook.redPhosphorus = 150;

protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150; 