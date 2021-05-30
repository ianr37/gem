
export class GemRoot {

    constructor(callback) {
        this.callback = callback;
    }

    fakeEvent(action) {
        this.callback(action);
    }

}

