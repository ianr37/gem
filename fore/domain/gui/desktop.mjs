
import { Node } from './node.mjs';

export class Desktop extends Node {

    constructor(parent) {
        super(parent);
        this.header = null;
        this.navbar = null;
        this.main = null;
        this.aside = null;
        this.footer = null;
    }

    build() {
        const document = this.parent.htmlElement.ownerDocument;
        const myRoot = document.createElement('div');
        this.parent.htmlElement.appendChild(myRoot);
    }

}

