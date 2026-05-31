let studentName:string;
console.log(studentName); // Output: undefined

studentName = "John";
console.log(studentName); // Output: John

function getStudentName(): string | undefined {
    // Simulating a scenario where the name might not be available
    const isNameAvailable = Math.random() > 0.5; // Randomly decide if the name is available
    if (isNameAvailable) {
        return "Jane Doe";
    } else {
        return undefined;
    }
}
const yourName = getStudentName();
console.log(yourName); // Output: "Jane Doe" or undefined

let age:number | null = null;
console.log(age); // Output: null
age = 25;
console.log(age); // Output: 25

function greet(name: string | null): void {
    if (name === null) {
        console.log("Hello, guest!");
    } else {
        console.log(`Hello, ${name}!`);
    }
}
greet(null); // Output: Hello, guest!
greet("Alice"); // Output: Hello, Alice!