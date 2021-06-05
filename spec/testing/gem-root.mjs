
export class GemRoot {

    constructor() {
        this.controllerCallback = null;
    }

    fakeEvent(action) {
        this.controllerCallback(action);
    }

}

