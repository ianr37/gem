
import { Node } from './node.mjs';
import { HTMLElement } from './html-element.mjs';
import { HTMLButtonElement } from './html-button-element.mjs';
import { HTMLImageElement } from './html-image-element.mjs';
import { HTMLInputElement } from './html-input-element.mjs';
import { HTMLLabelElement } from './html-label-element.mjs';

const builders = new Map([
    ['article', HTMLElement],
    ['aside', HTMLElement],
    ['body', HTMLElement],
    ['button', HTMLButtonElement],
    ['div', HTMLElement],
    ['footer', HTMLElement],
    ['h1', HTMLElement],
    ['h2', HTMLElement],
    ['h3', HTMLElement],
    ['h4', HTMLElement],
    ['h5', HTMLElement],
    ['h6', HTMLElement],
    ['head', HTMLElement],
    ['header', HTMLElement],
    ['img', HTMLImageElement],
    ['input', HTMLInputElement],
    ['label', HTMLLabelElement],
    ['main', HTMLElement],
    ['menu', HTMLElement],
    ['nav', HTMLElement],
    ['span', HTMLElement]
]);

export class HTMLDocument extends Node {

    constructor() {
        super();
        this.ownerDocument = this;
    }

    createElement(tagName) {
        let result = null;
        const builder = builders.get(tagName);
        if (builder) {
            result = new builder();
            result.ownerDocument = this;
            result.tagName = tagName;
        } else {
            throw new Error(`Unrecognised tag "${tagName}"`);
        }
        return result; 
    }

}

