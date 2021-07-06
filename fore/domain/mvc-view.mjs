
export class MvcView {

    constructor() {
        this.model = null;
        this.controller = null;
        this.root = null;
    }

    attach(root) {
        this.root = root;
    }

}

