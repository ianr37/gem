
export class WorkflowStore {

    constructor () {
        this.definitions = new Map();
    }

    addDefinition(name, definition) {
        this.definitions.set(name, definition);
    }

    getDefinition(name) {
        return this.definitions.get(name) || null;
    }
}

