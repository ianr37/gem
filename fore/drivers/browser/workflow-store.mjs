
import { WorkflowStore } from '../../domain/index.mjs';

export class JsonWorkflowStore extends WorkflowStore {

    constructor(jsonString) {
        super();
        const definitions = JSON.parse(jsonString);
        for (const [index, wfd] of definitions.entries()) {
            for (const name in wfd) {
                this.addDefinition(wfd.name, wfd);
            }
        }
    }

}

