let studentName: string = "Alice";
let isStudent: boolean = true;

console.log(`Student Name: ${studentName}`);
console.log(`Is Student: ${isStudent}`);

// Example of using string and boolean in a function
function greetStudent(name: string, isStudent: boolean): string {
    if (isStudent) {    
        return `Hello, ${name}! Welcome to the class.`;
    } else {
        return `Hello, ${name}! You are not enrolled as a student.`;
    }   
}
console.log(greetStudent(studentName, isStudent));

// concatenating string and boolean values
let greeting: string = "Welcome to the course!";
let isEnrolled: boolean = true;
let message: string = `${greeting} Enrollment status: ${isEnrolled}`;
console.log(message);