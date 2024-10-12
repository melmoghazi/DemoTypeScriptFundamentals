
function echo<T>(value: T): T {
    return value;
}

class Person {
    constructor(public name: string) { }
}
class Customer extends Person {

}
function echo1<T extends Person>(value: T): T {
    return value;
}

echo({ name: `Ali` });
echo1(new Person('Ali'));
echo1(new Customer('Ali'));
