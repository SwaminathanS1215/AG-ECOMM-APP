import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

// This class will create logs
export class LoggerService {
    constructor() { }

    // Function to log the details
    log(type: string, msg: string) {
        const date: Date = new Date();
        const logStr = `${type} : ${date} : ${msg}`;
        console.log(logStr);
    }
}
