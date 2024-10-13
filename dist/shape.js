"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
    logfile() {
    }
}
class Circle extends Shape {
    constructor(raduis, color) {
        super(color);
        this.raduis = raduis;
    }
    render() {
        console.log(`render circle.`);
    }
}
let sh = new Circle(10, `red`);
console.log(sh);
