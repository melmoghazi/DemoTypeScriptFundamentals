import { Person, Student, Teacher } from "./person";


function printNames(persons: Person[]) {
    for (let p of persons) {
        console.log(p.fullName);
    }
}

printNames([
    new Student(1,'Omar','Ali'),
    new Teacher('Abo','Obua')]
 );

