
export class MvcView {

    constructor() {
        this.model = null;
        this.controller = null;
        this.root = null;
        this.controllerCallback = null;
    }

    build(document) {
        throw new Error('NotYetImplemented');
    }

    setControllerCallback(handler) {
        this.controllerCallback = handler;
    }
}

