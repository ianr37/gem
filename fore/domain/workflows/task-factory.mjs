
export class WorkflowTaskFactory {

    constructor(builders) {
        this.builders = builders;
    }

    createTask(name) {
        const builder = this.builders.get(name);
        if (! builder) {
            throw new Error(`Unknown task '${name}'`);
        }
        return builder;
    }

}

