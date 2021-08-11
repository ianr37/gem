
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
        const workflow = this.store.get(name);
        if (! workflow) {
            throw new Error(`Unknown workflow '${name}'`);
        }
        return workflow;
    }

    _loadDefinitions(definitions) {
        for (const [index, wfd] of definitions.entries()) {
            for (const name in wfd) {
                this.addDefinition(wfd.name, wfd);
            }
        }
    }
}

