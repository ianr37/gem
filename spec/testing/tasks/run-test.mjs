
import { WorkflowTask, WorkflowStepStatus } from '../../../fore/domain/index.mjs';

export class Runtest extends WorkflowTask {

    execute() {
        return new WorkflowStepStatus();
    }
}

