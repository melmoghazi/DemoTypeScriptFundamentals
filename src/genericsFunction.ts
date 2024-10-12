
//generic in function
// function wrapInArray(value:T){
//     return [value];
// }

//or wrap the function in a class
class ArrayUtils<T> {
    wrapInArray(value: T) {
        return [value];
    }
}

let arrUtils = new ArrayUtils<number>();
console.log(arrUtils.wrapInArray(1));