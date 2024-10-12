
class KeyValuePair<T, V> {
    constructor(public key: T,public value: V) { }
}

//1:Small 2:Medum, 3:Large
//size1:Small, size2:Medum, size3:Large
//how menay peaces from the different sizes
//size1:12, size2:24
let pairNS = new KeyValuePair<number, string>(1, 'Small');
//pairNS.value.
let pairSS = new KeyValuePair<string, string>('size1', 'Small');
let pariSN = new KeyValuePair('size1', 12);

