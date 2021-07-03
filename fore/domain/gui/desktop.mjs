
import { GemNode } from './node.mjs';

export class Desktop extends GemNode {

    constructor(htmlParent) {
        super(null, htmlParent);
        this.htmlElement = null;
        this.header = null;
        this.navbar = null;
        this.main = null;
        this.aside = null;
        this.footer = null;
    }

    build() {
        const document = this.htmlParent.ownerDocument;
        this.htmlElement = document.createElement('div');
        this.htmlParent.appendChild(this.htmlElement);
    }

}

