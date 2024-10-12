abstract class Shape {
    constructor(public color: string) { }

    abstract render(): void;
    logfile(){

    }
}

class Circle extends Shape {
    constructor(private raduis: number, color: string) {
        super(color);
    }
    override render(): void {
        console.log(`render circle.`);
    }
}

let sh: Circle = new Circle(10, `red`);

console.log(sh);