
import { GemNode } from './gem-node.mjs';

export class Body extends GemNode {

    constructor(htmlBodyElement) {
        super(null, null);
        this.htmlElement = htmlBodyElement;
    }

}

