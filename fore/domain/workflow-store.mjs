
import { readFileSync } from 'fs';

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

export class JsonWorkflowStore extends WorkflowStore {

    constructor(path) {
        super();
        const entries = JSON.parse(readFileSync(path));
        for (const index in entries) {
            const definitions = entries[index];
            for (const name in definitions) {
                this.addDefinition(name, definitions[name]);
            }
        }
    }

}

