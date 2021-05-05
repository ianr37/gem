
import { WorkflowParameter } from '../domain/index.mjs';

export class WorkflowParameterFactory {

    constructor() {
    }

    createParameter(x) {
        return new WorkflowParameter(x);
    }

}

