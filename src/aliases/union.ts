let id: string | number;
id = 123;
id = 'abc123';
console.log(`ID: ${id}`);

function printID(id: string | number): void {
    console.log(`ID: ${id}`);
}
printID(456);
printID('def456');


function printData(data: string | number): void {
    if (typeof data === 'string') {
        console.log(`String data: ${data.toUpperCase()}`);
    } else {
        console.log(`Number data: ${data}`);
    }
}
printData('Hello, World!');
printData(789);