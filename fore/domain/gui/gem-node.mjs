
export class GemNode {

    constructor(parent, htmlParent) {
        this.parent = parent;
        this.htmlParent = htmlParent;
        this.children = [];
        this.build(htmlParent.ownerDocument); 
    }

    build(document) {
        throw Error('Not implemented');
    }

}

