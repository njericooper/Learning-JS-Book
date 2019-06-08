//Property Enumertion
//for...in
const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

for(let prop in o) {
    if(!ohasOwnProperty(prop)) continue;
    console.log(`${prop}: ${o[prop]}`);
}

//Object Kays
const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, [SYM]: 4 };
Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));

const o = { apple: 1, xochit: 2, ballon: 3, guitar: 4, xylophone: 5, };

Object.keys(o)
    .filter(prop => prop.match(/^x/))
    .forEach(prop => console.log(`${prop}; ${o[prop]}`));

//Object-Orriented Programming
//Class and Instance Creation

class Car {
    constructor() {
    }
}

const car1 = new Car();
const car2 = new Car();

car1 instanceof Car //true
car1 instanceof Array //false

class Car {
    constructor(make, model) {
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

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "31");
car1.shift('D');
car2.shift('R');

car1.userGear
car2.userGear

//Dynamic Properties

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this._userGears[0];
    }
    get userGear() { return this._userGear; }
    set userGear(value) {
        if(this._userGears.indexOf(value) < 0)
        throw new Error(`Invalid gear: ${value}` );
        this._userGear = value;
    }
    shift(gear) {this.userGear = gear; }
}

const Car = (function() {
    constcarProps = new WeakMap();
    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D'];
            carProps.set(this, { userGear: this._userGears[0] });
        }

        get userGear() { returncarProps.get(this).userGear; }
        set userGear(value) {
            if(this._userGears.indexOf(value) < 0)
            throw new Error(`Invalid gear: ${value}` );
            carProps.get(this).userGear = value;
        }
        shift(gear) { this.userGear = gear }
    }
    return Car;
})();

//Classes Are Functions

function Car(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    this.userGear = this.userGears[0];
}

class Es6Car {}
function Es6Car() {} //omit the parasenthese

const car1 = new Car();
const car2 = new Car();
car1.shift === Car.prototype.shift;
car1.shift('D');
car1.shift('d');
car1.userGear;
car1.shift === car2.shift

car1.shift = function(gear) { this.userGear = gear.toUpperCase(); }
car1.shift === Car.prototype.shift;
car1.shift === car2.shift;
car1.userGear;

//Static Methods
class Car {
    static getNextVin() {
        return Car.nextVin++;
    }
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.vin = Car.getNextVin();
    }
    static areSimilar(car1, car2){
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
car3.vin
Car.areSimilar(car1, car2);
Car.areSimilar(car2, car3);
Car.areSame(car2, car3);
Car.areSame(car2, car2);

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
    deployAirbags() {
        console.log("BWOOSH");
    }
}

const v = new Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judy");
v.passengers;
const c = new Car();
c.addPassenger("Alice");
c.addPassenger("Cameron");
c.passengers;
v.deployAirbags();
c.deployAirbags();

//Polymorphism

class Motorcycle extends Vehicle {}
const c = new Car();
const m = new Motorcycle();
c instanceof Car;
c instanceof Vehicle;
m instanceof Car;
m instanceof Motorcycle;
m instanceof Vehicle;

//Enumerationg Object Properties, Revisited
class Super {
    constructor() {
        this.name = 'Super';
        this.isSuper = true;
    }
}

class Sub extends Super {
    constructor() {
        super();
        this.name = 'Sub';
        this.isSub = true;
    }
}

const obj = new Sub();
for(let p in obj) {
    console.log(`${p}: ${obj[p]}` + (obj.hasOwnProperty(p) ? '' : '(inherited)'));
}

//String Representation

class Car {
    toString() {
        return `${this.make} ${this.model}: ${this.vin}`;
    }
}

//Multiple Inheritance, Mixins, and Interfaces

class InsurancePolicy {}
function makeInsurancePolicy(o) {
    o.addInsurancePolicy = function(p) { this.InsurancePolicy = p }
    o.getInsurancePolicy = function() { return this.InsurancePolicy; }
    o.isInsured = function() { return !!this.InsurancePolicy; }
}

makeInsurable(Car);

class InsurancePolicy() {}
const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();
function makeInsurable(o) {
    o[ADD_POLICY] = function(p) { this[_POLICY] = p; }
    o[GET_POLICY] = function() { return this[_POLICY]; }
    o[IS_INSURED] = function() { return !!this[_POLICY]; }
}