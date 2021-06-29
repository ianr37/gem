
export class Node {

    constructor(parent) {
        this.children = [];
        this.htmlElement = null;
        this.parent = parent;
        if (parent) {
           this.build(); 
        }
    }

    appendChild(child) {
        this.children.push(child);
    }

    build() {
        throw Error('Not implemented');
    }

}

