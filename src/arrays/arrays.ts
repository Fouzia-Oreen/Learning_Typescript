// Array Types in TypeScript
let number : number[] = [1, 2, 3, 4, 5];
let string : string[] = ["Hello", "World", "TypeScript"];
let boolean : boolean[] = [true, false, true];
let any : any[] = [1, "Hello", true, { name: "TypeScript" }];

console.log("Number Array:", number);
console.log("String Array:", string);
console.log("Boolean Array:", boolean);
console.log("Any Array:", any);


// Using Array Constructor
let numberArray: Array<number> = new Array(1, 2, 3, 4, 5);
let stringArray: Array<string> = new Array("Hello", "World", "TypeScript");
let booleanArray: Array<boolean> = new Array(true, false, true);
let anyArray: Array<any> = [1, "Hello", true, { name: "TypeScript" }];

console.log("Number Array (Constructor):", numberArray);
console.log("String Array (Constructor):", stringArray);
console.log("Boolean Array (Constructor):", booleanArray);
console.log("Any Array (Constructor):", anyArray);

let user: { name: string; age: number }[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
console.log("User Array:", user);


// Multidimensional Arrays
let matrix: number[][] = [
    [1, 2, 3],  
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matrix:", matrix);

let data : (number | string)[][] = [
    [1, "Alice"],
    [2, "Bob"],
    [3, "Charlie"]
];
console.log("Data Array:", data);

// Methods on Arrays
let fruits: string[] = ["Apple", "Banana", "Cherry"];
fruits.push("Date");
console.log("Fruits after push:", fruits);
fruits.pop();
console.log("Fruits after pop:", fruits);
fruits.unshift("Elderberry");
console.log("Fruits after unshift:", fruits);
fruits.shift();
console.log("Fruits after shift:", fruits);

// Iterating over Arrays
console.log("Iterating over fruits:");
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// Using map to create a new array
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase Fruits:", upperCaseFruits);

// Using filter to create a new array
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log("Fruits with more than 5 characters:", longFruits);

// Using reduce to sum numbers
let numbers: number[] = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of numbers:", sum);

// Using find to get the first element that matches a condition
let foundFruit = fruits.find(fruit => fruit.startsWith("B"));
console.log("First fruit that starts with 'B':", foundFruit);

// Using includes to check if an element exists in the array
let hasCherry = fruits.includes("Cherry");
console.log("Does the fruits array include 'Cherry'?", hasCherry);

// Using indexOf to find the index of an element
let indexOfBanana = fruits.indexOf("Banana");
console.log("Index of 'Banana':", indexOfBanana);

// Using slice to create a new array
let slicedFruits = fruits.slice(1, 3);
console.log("Sliced Fruits (index 1 to 2):", slicedFruits);

// Using splice to modify the array
fruits.splice(1, 1, "Blueberry");
console.log("Fruits after splice:", fruits);

// Using concat to merge arrays
let moreFruits: string[] = ["Fig", "Grape"];
let allFruits = fruits.concat(moreFruits);
console.log("All Fruits after concat:", allFruits);

// Using spread operator to merge arrays
let allFruitsSpread = [...fruits, ...moreFruits];
console.log("All Fruits after spread operator:", allFruitsSpread);

// Using flat to flatten nested arrays
let nestedArray: number[][] = [[1, 2], [3, 4], [5, 6]];
let flatArray = nestedArray.flat();
console.log("Flat Array:", flatArray);

// Using flatMap to map and flatten an array
let flatMappedArray = nestedArray.flatMap(arr => arr.map(num => num * 2));
console.log("Flat Mapped Array (doubled values):", flatMappedArray);

// Using sort to sort an array
let unsortedNumbers: number[] = [5, 3, 8, 1, 4];
unsortedNumbers.sort((a, b) => a - b);
console.log("Sorted Numbers:", unsortedNumbers); 
