//Property Enumeration
/*//for...in
const SYM = Symbol();

const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

for(let prop in o) {
    if(!o.hasOwnProperty(prop)) continue;
    console.log(`${prop}: ${o[prop]}`);
}

//Object.Keyss
//const SYM = Symbol();
const p = { a: 1, b: 2, c: 3, [SYM]: 4 };
Object.keys(p).forEach(prop => console.log(`${prop}: ${o[prop]}`));

const q = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5, };

Object.keys(q)
    .filter(prop => prop.match(/^x/))
    .forEach(prop => console.log(`${prop}: ${q[prop]}`));*/




//Object-Oriented Programming    
/*//Class and Instance Creation

class Car {
    constructor(make, model){
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }
    shift(gear) {
        if(this.userGears.indexOf(gear) < 0)
            throw new Error(`Invalid gear: ${gear}`);
        this.userGear = gear;    
    }
}
const car1 = new Car("Tests", "Model S");
const car2 = new Car("Mazda", "31");
car1.shift('D');
car2.shift('R');
console.log(car1 instanceof Car);
console.log(car1 instanceof Array);
console.log(car1.userGear);
console.log(car2.userGear);*/

 
//Dynamic Properties

/*class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this._userGears[0];
    }

    get userGear() { return this._userGear; }
    set userGear(value) {
        if(this._userGears.indexOf(value) < 0)
            throw new Error(`Invalid gear: ${value}`);
        this._userGear = value;    
    }
    shift(gear) { this.userGear = gear; }
}    

const car1 = new Car("Tests", "Model S");
const car2 = new Car("Mazda", "31");
car1._userGear = 'D';

console.log(car1);*/


/*const Car = (function() {
    const carProps = new WeakMap();

    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D'];
            carProps.set(this, { userGear: this._userGears[0] });
        }

        get userGear() { return carProps.get(this).userGear; }
        set userGear(value) {
            if(this._userGears.indexOf(value) < 0)
                throw new Error(`Invalid gear: ${value}`);
            carProps.get(this).userGear = value;    
        }
        shift(gear) { this.userGear = gear; }
    }
    return Car;
})();*/

/*function Car(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this._userGear[0];
}
console.log(Car);


class Es6Car {}

console.log(typeof Es6Car);*/


//The Prototype

/*class Car {
    constructor(make, model){
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }
    shift(gear) {
        this.userGear = gear;    
    }
}

const car1 = new Car();
const car2 = new Car();
console.log(car1.shift === Car.prototype.shift);
console.log(car1.shift('D'));
console.log(car1.shift('d'));
console.log(car1.userGear);
console.log(car1.shift === car2.shift);
console.log(car1.shift = function(gear) { this.userGear = gear.toUpperCase(); });
console.log(car1.shift === Car.prototype.shift);
console.log(car1.shift === car2.shift);
console.log(car1.shift('d'));
console.log(car1.userGear);*/

/*//Static Methods

class Car {
    static getNextVin() {
        return Car.nextVin++;

    }
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.vin = Car.getNextVin();
    }
    static areSimilar(car1, car2) {
        return car1.make===car2.make && car1.model===car2.model;
    }
    static areSame(car1, car2) {
        return car1.vin===car2.vin;
    }
}
Car.nextVin = 0;
const car1 = new Car("Tesla", "S");
const car2 = new Car("Mazda", "3");
const car3 = new Car("Mazda", "3");

car1.vin;
car2.vin;
car3.vin;
console.log(Car.areSimilar(car1, car2));
console.log(Car.areSimilar(car2, car3));
console.log(Car.areSame(car2, car3));
console.log(Car.areSame(car2, car2));*/

//Inheritance
class Vehicle {
    constructor() {
        this.passengers = [];
        console.log("Vehicle created");
    }
    addPassenger(p) {
        this.passengers.push(p);
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        console.log("Car created");
    }
    deployedAirbags() {
        console.log("BWOOSH!");
    }
}

const v = new Vehicle();
console.log(v.addPassenger("Frank"));
console.log(v.addPassenger("Judy"));
console.log(v.addPassenger);
const c = new Car();
console.log(c.addPassenger("Alice"));
console.log(c.addPassenger("Cameron"));
console.log(c.addPassengers);
//console.log(v.deployedAirbags());
console.log(c.deployedAirbags());

//Polymorphism

class Motorcycle extends Vehicle {}

const c2 = new Car();
const m = new Motorcycle();

console.log(c2 instanceof Car);
console.log(c instanceof Vehicle);
console.log(m instanceof Car);
console.log(m instanceof Motorcycle);
console.log(m instanceof Vehicle);


//Enumerating Object Properties, Revised
class Super {
    constructor() {
        this.name = 'Super';
        this.isSuper = true;
    }
}

Super.prototype.sneaky = 'not recommended';

class Sub extends Super {
    constructor() {
        super();
        this.name = 'Sub';
        this.isSub = true;
    }
}

const obj = new Sub();

for(let p in obj) {
    console.log(`${p}: ${obj[p]}` +  (obj.hasOwnProperty(p) ? '' : ' (inherited)'));
}

//String Representatoin

class Carz {
    toString() {
        return `${this.make} ${this.model}: ${this.vin}`;
    }
}
console.log(Carz.toString());


//Multiple Inheritance Mixins Interfaces

class InheritancePolicy {

}
function makeInsuraable(o) {
    o.addInsurancePolicy = function(p) { this.insurancePolicy = p; }
    o.getInsurancePolice = function() { return this.insurancePolicy; }
    o.isInsured = function() { return !!this.insurancePolicy; }
}

//makeInsuraable(Car);
//const car1 = new Car();
//car1.addInsurancePolicy(new insurancePolicy());

makeInsuraable(Car.prototype);
const car1 = new Car();
makeInsuraable(car1);
//car1.addInsurancePolicy(new InheritancePolicy());

class InsurancePolicy {}
const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();
function makeInsuraable(o) {
    o.ADD_POLICY = function(p) { this[_POLICY] = p; }
    o.GET_POLICY = function() { return this[_POLICY]; }
    o.IS_INSURED = function() { return !!this[_POLICY]; }  //with brackets causes error
}


