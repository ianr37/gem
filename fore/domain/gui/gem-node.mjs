
export class GemNode {

    constructor(gemParent, htmlParent, htmlElement) {
        this.gemparent = gemParent;
        this.htmlParent = htmlParent;
        this.htmlElement = htmlElement;
        this.children = new Map();
    }

    addChild(name, child) {
        if (this.children.has(name)) {
            throw new Error('Already my child');
        } else if (child.gemParent) {
            throw new Error('Someone else\'s child');
        } else if (this.isInvalidName(name)) {
            throw new Error(`Invalid name "${name}"`);
        } else {
            child.gemParent = this;
            this.children.set(name, child);
        }
    }

    getChild(name) {
        const result = this.children.get(name);
        if (! result) {
            throw new Error(`Unknown entry "${name}"`);
        }
        return result;
    }

    hasChild(name) {
        return this.children.has(name);
    }

    isInvalidName(name) {
        return false;
    }

    removeChild(name) {
        const result = this.children.get(name);
        if (result) {
            result.gemParent = null;
            this.children.delete(name);
        }
        return result;
    }

}

