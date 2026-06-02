type Username = string;
let userName: Username = 'John Doe';
console.log(`Hello, ${userName}!`);

type User = {
    id: number;
    name: string;
    email: string;
};

function getUserInfo(user: User): string {
    return `User Info: ID=${user.id}, Name=${user.name}, Email=${user.email}`;
}

const user: User = {
    id: 1,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
};
console.log(getUserInfo(user));

// Union type alias
type ID = number | string;
function printID(id: ID): void {
    console.log(`ID: ${id}`);
}
printID(123);
printID('abc123');

// Intersection type alias
type Admin = {
    admin: boolean;
};
type Employee = {
    employee: boolean;
};
type AdminEmployee = Admin & Employee;
function isAdminEmployee(user: AdminEmployee): boolean {
    return user.admin && user.employee;
}
const adminEmployee: AdminEmployee = {
    admin: true,
    employee: true
};
console.log(`Is Admin Employee: ${isAdminEmployee(adminEmployee)}`);
