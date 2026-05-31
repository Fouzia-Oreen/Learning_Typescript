// bigInt Number type for TypeScript
// This code demonstrates the use of 'bigint' type in TypeScript, which is used for representing integers larger than 2^53 - 1.
let bigIntValue: bigint = 9007199254740991n; // The largest safe integer in JavaScript
console.log(bigIntValue); // Output: 9007199254740991n

// You can also perform arithmetic operations with bigint
let anotherBigInt: bigint = 12345678901234567890n;
let sum: bigint = bigIntValue + anotherBigInt;
console.log(sum); // Output: 21345678901234567881n

// BigInt can also be used in comparisons
if (bigIntValue < anotherBigInt) {
    console.log("bigIntValue is smaller than anotherBigInt");
} else {
    console.log("bigIntValue is greater than or equal to anotherBigInt");
}

console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991

let a = 100n;
let b = 200n;
let c = a * b;
console.log(c); // Output: 20000n 