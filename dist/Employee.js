"use strict";
class Employee {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    getEmployeeProfile(employeeId) {
        if (employeeId > 0) {
            return `employee profile ${this.id} - ${this.name} - ${this.age}`;
        }
    }
    get Age() {
        return this.age;
    }
    set Age(value) {
        if (value <= 0)
            throw new Error(`invalid age`);
        this.age = value;
    }
}
let employee = new Employee(1, 'Mohammed', 38);
//let _age: number = employee.Age;
employee.Age = 0;
console.log(employee);
