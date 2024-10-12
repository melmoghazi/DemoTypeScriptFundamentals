"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
function printNames(persons) {
    for (let p of persons) {
        console.log(p.fullName);
    }
}
printNames([
    new person_1.Student(1, 'Omar', 'Ali'),
    new person_1.Teacher('Abo', 'Obua')
]);
