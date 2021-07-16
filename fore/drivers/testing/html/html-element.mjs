
import { Element } from './element.mjs';
import { Event } from './event.mjs';

export class HTMLElement extends Element {

    constructor() {
        super();
        this.tagName = null;
        this.dataset = {};
    }

    click() {
        const event = new Event('click', this);
        this.dispatchEvent(event);
    }

}

