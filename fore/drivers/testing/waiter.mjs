
export class Waiter {

    constructor() {
        this._wait = (ms) => {
            return new Promise((resolve) => {setTimeout(resolve, ms)});
        };
    }

    waitOneTick() {
        return this._wait(0);
    }

}

