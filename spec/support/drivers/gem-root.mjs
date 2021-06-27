
export class GemRoot {

    constructor(callBack) {
        this.controllerCallback = callBack;
    }

    fakeEvent(action) {
        this.controllerCallback(action);
    }

}

