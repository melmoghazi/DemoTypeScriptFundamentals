class SeatAssignment {

    //index signature property
    [seatNumber: string]: number;
}

let obj: SeatAssignment = new SeatAssignment();
obj.A1 = 1;
obj['A1'] = 1;//this is equal to obj.A1 = 1
obj.A2 = 2;

console.log(obj);