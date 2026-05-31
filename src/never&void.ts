// This file demonstrates the use of 'never' and 'void' types in TypeScript.
function throwError(message: string): never {
    throw new Error(message);
}
function infiniteLoop(): never {
    while (true) {
        console.log("This loop will run forever.");
    }
}
try {
    throwError("This is an error message.");
} catch (error) {
    console.error(error); // Output: Error: This is an error message.
}  
// Uncommenting the following line will cause an infinite loop
// infiniteLoop();


// This function demonstrates the use of 'never' type to ensure exhaustive checks in a switch statement or if-else chain.
function processValue(value: number | string): void {
    if (typeof value === "number") {
        console.log(`The number is ${value}`);
    } else if (typeof value === "string") {
        console.log(`The string is "${value}"`);
    } else {
        // This case should never happen, but we can use 'never' to ensure type safety
        const _exhaustiveCheck: never = value;
        throw new Error(`Unhandled type: ${_exhaustiveCheck}`);
    }
}
processValue(42); // Output: The number is 42
processValue("Hello, TypeScript!"); // Output: The string is "Hello, TypeScript!"