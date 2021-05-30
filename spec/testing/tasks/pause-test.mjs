
import { WorkflowTask, WorkflowStepStatus, DriverAction } from '../../../fore/domain/index.mjs';

export class PauseTest extends WorkflowTask {

    constructor(workflow, name, fields) {
        super(workflow, name, fields);
    }

    run(presenter) {
        setTimeout(() => {
            const resume = new DriverAction(null, 'resume-workflow', {flowId: this.flowId});

        });
        return new WorkflowStepStatus('pause', 'wait for data');
    }

    restart(data) {
        return new WorkflowStepStatus();
    }

}

