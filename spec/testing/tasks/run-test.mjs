
import { WorkflowTask, WorkflowStepStatus } from '../../../fore/domain/index.mjs';

export class RunTest extends WorkflowTask {

    run() {
        return new WorkflowStepStatus();
    }
}

