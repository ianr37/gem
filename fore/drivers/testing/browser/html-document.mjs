
import { Node } from './node.mjs';
import { HTMLBodyElement } from './html-body-element.mjs';
import { HTMLDivElement } from './html-div-element.mjs';
import { HTMLElement } from './html-element.mjs';

export class HTMLDocument extends Node {

    constructor() {
        super();
        this.ownerDocument = this;
    }

    createElement(tagName) {
        let result = null;
        this.validateTagName(tagName);
        switch (tagName) {
            case 'body':
                result = new HTMLBodyElement();
                break;
            case 'div':
                result = new HTMLDivElement();
                break;
            default:
                result = new HTMLElement()
                break;
        } 
        result.ownerDocument = this;
        result.tagName = tagName;
        return result; 
    }

    validateTagName(tagName) {
        /*TODO throw exception if unknown tag*/
    }

}

