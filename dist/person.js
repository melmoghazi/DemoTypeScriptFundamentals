"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = exports.Student = exports.Person = void 0;
class Person {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(vlaue) {
        this._firstName = vlaue;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
    walk() {
        console.log("walking");
    }
}
exports.Person = Person;
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log(`taking a test`);
    }
}
exports.Student = Student;
class Teacher extends Person {
    get fullName() {
        return 'Mr.' + super.fullName;
    }
}
exports.Teacher = Teacher;
// let stud = new Student(1, 'Fadl', 'Yahua');
// console.log(stud);
// let teacher: Teacher = new Teacher('Omar', 'Ali');
// console.log(`teacher = ${teacher.fullName}`);
