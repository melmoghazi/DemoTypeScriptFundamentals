export class Person {
    constructor(public _firstName: string, public _lastName: string) { }

    get firstName() {
        return this._firstName;
    }
    set firstName(vlaue: string) {
        this._firstName = vlaue;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }

    walk() {
        console.log("walking");
    }
}

export class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }
    takeTest() {
        console.log(`taking a test`);
    }
}

export class Teacher extends Person {

    override get fullName() {
        return 'Mr.' + super.fullName;
    }
}

// let stud = new Student(1, 'Fadl', 'Yahua');
// console.log(stud);

// let teacher: Teacher = new Teacher('Omar', 'Ali');
// console.log(`teacher = ${teacher.fullName}`);
