let id1 = Symbol();
let id2 = Symbol(); 
console.log(id1 === id2); // Output: false

let id3 = Symbol("description");
let id4 = Symbol("description");
console.log(id3 === id4); // Output: false

let id5 = Symbol("id");
let id6 = Symbol("id");

let user = {
    [id5]: "User1",
    [id6]: "User2"
};
console.log(user[id5]); // Output: User1
console.log(user[id6]); // Output: User2


let token : symbol = Symbol("token");
let student = {
    name: "Alice",
    [token]: "StudentID123"
};

console.log(student[token]); // Output: StudentID123
console.log(Symbol("token").toString()); // Output: Symbol(token)