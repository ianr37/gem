
import { WorkflowParameter } from '../../domain/index.mjs';

export class ParameterFactory {

    constructor() {
    }

    createParameter(x) {
        return new WorkflowParameter(x);
    }

}

