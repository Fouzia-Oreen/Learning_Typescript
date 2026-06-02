type Person = {
    name: string;
}
type Employee = {
    salary: number;
}

type WorkingPerson = Person & Employee;

const employee: WorkingPerson = {
    name: 'Alice',
    salary: 50000
};


type Manager = {
    department: string;
}
type Director = Person & Employee & Manager;

const director: Director = {    
    name: 'Bob',
    salary: 100000,
    department: 'Sales'
};


// Intersection types can also be used with interfaces
interface Vehicle {
    make: string;
    model: string;
}
interface User {
    username: string;
}
interface Admin {
    permissions: string[];
}
type AdminUser = User & Admin;

const adminUser: AdminUser = {
    username: 'admin123',
    permissions: ['read', 'write', 'delete']
};