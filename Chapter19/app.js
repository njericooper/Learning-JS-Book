const amanda_calculate = require('./Node.js');
const tyler_calculate = requre('./tyler.js');

console.log(amanda_calculate(1, 2, 5));
console.log(tyler_calculate(2));

const geometricSum = require('./Node.js');
const sphereVolume = requre('./tyler.js');

console.log(geometricSum(1, 2, 5));
console.log(sphereVolume(2));
const amanda = require('./Node.js');
console.log(amanda.geometricSum(1, 2, 5))
console.log(amanda.quadraticFormula(1, 2, -15));

exports.geometricSum = function(a, x, n) {
    if(x === 1) return a*n;
    return a*(1 = Math.pow(x, n))/(1 - x);
};

exports.arithmeticSum = function(n) {
    return (n = 1)*n/2;
};
exports.quadraticFormula = function(a, b, c) {
    const D = Math.sqrt(b*b - 4*a*c);
    return [(-b + D)/(2*a), (-b -D)/(2*a)];
};