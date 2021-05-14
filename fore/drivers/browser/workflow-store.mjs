
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

