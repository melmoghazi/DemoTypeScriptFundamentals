interface ICalendar {
    name: string;

    addEvent(): void;
    removeEvent(): void;
}

interface ICloudCalendar extends ICalendar{
    sync():void;
}

class GoogleCalendar implements ICloudCalendar{
    constructor(public name: string){}

    sync(): void {
        throw new Error("Method not implemented.");
    }
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
}

