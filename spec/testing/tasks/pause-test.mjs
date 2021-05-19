
import { WorkflowTask, WorkflowStepStatus } from '../../../fore/domain/index.mjs';

export class PauseTest extends WorkflowTask {

    run() {
        return new WorkflowStepStatus('pause', 'wait for data');
    }

    restart(data) {
        return new WorkflowStepStatus();
    }

}

