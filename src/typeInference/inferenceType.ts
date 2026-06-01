function add(a: number, b: number): number {
    return a + b;
}

const result = add(5, 10);
console.log(typeof result); // Output: "number"


function concatenate(str1: string, str2: string): string {
    return str1 + str2;
}
const concatenatedResult = concatenate("Hello, ", "world!");
console.log(typeof concatenatedResult); // Output: "string"

function isEven(num: number): boolean {
    return num % 2 === 0;
}
const evenCheck = isEven(4);
console.log(typeof evenCheck); // Output: "boolean"


let user : {
    name: string;
    age: number;
}

user = {
    name: "Alice",
    age: 30
}

 