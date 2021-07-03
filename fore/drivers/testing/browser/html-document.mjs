
import { Node } from './node.mjs';
import { HTMLBodyElement } from './html-body-element.mjs';
import { HTMLDivElement } from './html-div-element.mjs';

export class HTMLDocument extends Node {

    constructor() {
        super();
        this.ownerDocument = this;
    }

    createElement(tagName) {
        let result = null;
        switch (tagName) {
            case 'body':
                result = new HTMLBodyElement();
                break;
            case 'div':
                result = new HTMLDivElement();
                break;
            default:
                throw new Error(`HTML element "${tagName}" not yet implemented`);
        } 
        result.ownerDocument = this;
        return result; 
    }

}

