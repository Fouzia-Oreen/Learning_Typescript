// Dynamic function invocation with type safety
function greet(name: string): string {
    return `Hello, ${name}!`;
}
greet("Alice"); // Output: Hello, Alice!

// Higher-order function example
function createMultiplier(multiplier: number): (value: number) => number {
    return (value: number) => value * multiplier;
}
const double = createMultiplier(2);
console.log(double(5)); // Output: 10

function sum(a:number, b:number): number {
    return a + b;
}
console.log(sum(1, 2)); // Output: 3

function myName(name:string, age:number) {
    return `My name is ${name} and I am ${age} years old.`;
}
console.log(myName("Alice", 30)); // Output: My name is Alice and I am 30 years old.


// Function with optional parameters
function buildName(firstName: string, lastName?: string): string {
    return lastName ? `${firstName} ${lastName}` : firstName;
}
console.log(buildName("John")); // Output: John
console.log(buildName("John", "Doe")); // Output: John Doe

function greetPerson(name: string, greeting?: string): string {
    return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}
console.log(greetPerson("Alice")); // Output: Hello, Alice!
console.log(greetPerson("Alice", "Hi")); // Output: Hi, Alice!

// Function with default parameters
function greetWithDefault(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}
console.log(greetWithDefault("Alice")); // Output: Hello, Alice!
console.log(greetWithDefault("Alice", "Hi")); // Output: Hi, Alice!

// Arrow function example
const add = (a: number, b: number): number => a + b;
console.log(add(3, 4)); // Output: 7