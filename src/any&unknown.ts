// This code demonstrates the use of 'any' and 'unknown' types in TypeScript.  
let data:any = "Hello, World!";
console.log(data); // Output: Hello, World!
data = 42;
console.log(data); // Output: 42
let unknownData: unknown = "Hello, TypeScript!";
console.log(unknownData); // Output: Hello, TypeScript!

// Type assertion is required to use unknown type
if (typeof unknownData === "string") {
    console.log(unknownData.toUpperCase());   
} else {
    console.log("unknownData is not a string");
}

// Using unknown type with type guards
let value: unknown = 10;
if (typeof value === "number") {
    console.log(value * 2); // Output: 20
} else {    
    console.log("value is not a number");
}
