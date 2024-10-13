"use strict";
function echo(value) {
    return value;
}
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Customer extends Person {
}
function echo1(value) {
    return value;
}
echo({ name: `Ali` });
echo1(new Person('Ali'));
echo1(new Customer('Ali'));
