
import { ChildNode } from './child-node.mjs';

export class Div extends ChildNode {

    constructor(gemParent, htmlParent) {
        const document = htmlParent.ownerDocument;
        const htmlElement = document.createElement('div');
        super(gemParent, htmlParent, htmlElement);
    }

}

