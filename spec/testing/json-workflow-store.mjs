
import { WorkflowStore } from '../../fore/domain/index.mjs';

export class JsonWorkflowStore extends WorkflowStore {

    constructor(jsonString) {
        const definitions = JSON.parse(jsonString);
        super(definitions);
    }

}

