
export class Node {

    constructor() {
        this.children = new Map();
    }

    addChild(position, child) {
        this.children.set(position, child);
    }

}

