let user : [number, string] = [1, "John Doe"];

console.log(user[0]); // Output: 1
console.log(user[1]); // Output: John Doe

function displayUserInfo(user: [number, string]) {
    console.log(`User ID: ${user[0]}, User Name: ${user[1]}`);
}
displayUserInfo(user); // Output: User ID: 1, User Name: John Doe

// Tuple with optional elements
let userWithOptional: [number, string, string?] = [2, "Jane Doe"];
console.log(userWithOptional[0]); // Output: 2
console.log(userWithOptional[1]); // Output: Jane Doe
console.log(userWithOptional[2]); // Output: undefined

// Tuple with rest elements
let userWithRoles: [number, string, ...string[]] = [3, "Alice", "admin", "editor"];
console.log(userWithRoles[0]); // Output: 3
console.log(userWithRoles[1]); // Output: Alice
console.log(userWithRoles.slice(2)); // Output: ["admin", "editor"]
