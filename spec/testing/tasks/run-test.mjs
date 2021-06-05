
import { WorkflowTask, WorkflowStepStatus } from '../../../fore/domain/index.mjs';

export class RunTest extends WorkflowTask {

    constructor(workflow, name, fields) {
        super(workflow, name, fields);
    }

    run() {
        return new WorkflowStepStatus();
    }
}

