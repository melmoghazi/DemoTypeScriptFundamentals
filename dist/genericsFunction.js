"use strict";
//generic in function
// function wrapInArray(value:T){
//     return [value];
// }
//or wrap the function in a class
class ArrayUtils {
    wrapInArray(value) {
        return [value];
    }
}
let arrUtils = new ArrayUtils();
console.log(arrUtils.wrapInArray(1));
