
import { WorkflowParameter } from './parameter.mjs';

export class WorkflowParameterFactory {

    createParameter(definition) {
        return new WorkflowParameter(definition);
    }

}

