function add(a,b){
    return a + b;
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function divideInteger(a, b) {
    return Math.floor(a / b);
}

function mod(a, b) {
    return a % b;
}

function exponent(a, b) {
    return Math.pow(a, b);
}

function subt(a, b) {
    return a - b;
}

const num1 = 10;
const num2 = 5;

console.log("Sum:", add(num1, num2));
console.log("Difference:", subt(num1, num2));
console.log("Product:", multiply(num1, num2));
console.log("Quotient:", divide(num1, num2));
console.log("Modulus:", mod(num1, num2));
console.log("Exponent:", exponent(num1, num2));