
import { WorkflowTask, WorkflowStepStatus, DriverAction } from '../../../fore/domain/index.mjs';

export class PauseTest extends WorkflowTask {

    constructor(workflow, name, fields) {
        super(workflow, name, fields);
    }

    run() {
        const callBack = () => { 
            const resume = new DriverAction('resume-workflow', {workflow: this.workflow, state: 'ok'});
            this.workflow.actionCallback(resume);
        };
        setTimeout(callBack);
        return new WorkflowStepStatus('paused', 'wait for data');
    }

    restart(data) {
        return new WorkflowStepStatus();
    }

}

