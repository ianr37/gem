
import { WorkflowParameter } from './workflow-parameter.mjs';

export class WorkflowParameterFactory {

    createParameter(definition) {
        return new WorkflowParameter(definition);
    }

}

