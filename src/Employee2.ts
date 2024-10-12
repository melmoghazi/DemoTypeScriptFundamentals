class Employee2 {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    getEmployeeProfile(employeeId: number) {
        if (employeeId > 0) {
            return `employee profile ${this.id} - ${this.name} - ${this.age}`;
        }
    }
}

let emp = new Employee2(1,'Mohammed', 38);
console.log(emp);
emp.id =2;
let empProfile= emp.getEmployeeProfile(1);
console.log(empProfile);