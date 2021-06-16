
export class WorkflowStore {

    constructor (definitions) {
        this.store = new Map();
        if (definitions) {
            this._loadDefinitions(definitions);
        }
    }

    addDefinition(name, definition) {
        this.store.set(name, definition);
    }

    getDefinition(name) {
        return this.store.get(name) || null;
    }

    _loadDefinitions(definitions) {
        for (const [index, wfd] of definitions.entries()) {
            for (const name in wfd) {
                this.addDefinition(wfd.name, wfd);
            }
        }
    }
}

