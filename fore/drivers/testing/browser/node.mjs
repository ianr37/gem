
import { EventTarget } from './event-target.mjs';

export class Node extends EventTarget {

    constructor() {
        super();
        this.children = new Set();
        this.ownerDocument = null;
        this.parent = null;
    }

    appendChild(child) {
        if (child.parent) {
            child.parent.removeChild(child);
        }
        this.children.add(child);
        return child;
    }

    removeChild(child) {
        const removed = this.children.delete(child);
        if (! removed) {
            throw new Error('Not my child');
        }
        return child;
    }

}

