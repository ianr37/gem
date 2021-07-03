
export class GemNode {

    constructor(parent, htmlParent) {
        this.parent = parent;
        this.htmlParent = htmlParent;
        this.children = [];
        this.build(); 
    }

    build() {
        throw Error('Not implemented');
    }

}

