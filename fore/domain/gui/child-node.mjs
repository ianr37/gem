
import { GemNode } from './gem-node.mjs';

export class ChildNode extends GemNode {

    constructor(gemParent, htmlParent, htmlElement) {
        super(gemParent, htmlParent, htmlElement);
    }

    build() {
        throw new Error('Build not implemented');
    }

}
