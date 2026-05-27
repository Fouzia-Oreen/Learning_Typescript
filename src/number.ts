let age:number = 25;
let price:number = 19.99;
let temperature:number = -5;
export { age, price, temperature };
console.log(age, price, temperature)

// Integer
let count: number = 10;
// Floating-point number
let pi: number = 3.14;
// Negative number
let debt: number = -500;
// Exponential notation
let largeNumber: number = 1e6;
// NaN (Not a Number)
let notANumber: number = 0/0;
// Infinity
let infinity: number = 10/0;

console.log(count, pi, debt, largeNumber, notANumber, infinity);

// Addition
let sum: number = 5 + 10;
// Subtraction
let difference: number = 20 - 5;
// Multiplication
let product: number = 4 * 5;
// Division
let quotient: number = 20 / 4;
// Modulus
let remainder: number = 10 % 3;
console.log(sum, difference, product, quotient, remainder);


// Function to calculate the area of a circle
function calculateArea(radius: number): number {
    return Math.PI * radius * radius;
}
console.log(calculateArea(5));