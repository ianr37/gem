
import { WorkflowTask, DriverAction } from '../../../../domain/index.mjs';

export class PauseTest extends WorkflowTask {

    constructor(workflow, name, fields) {
        super(workflow, name, fields);
    }

    run() {
        const callBack = () => {
            const result =  {status: 'finished', rc: 0, msg: 'Succeeded'};
            const resume = new DriverAction('resume-workflow', {workflow: this.workflow, result: result});
            this.workflow.actionHandler(resume);
        };
        setTimeout(callBack);
        return {status: 'paused', rc: 0, msg: 'Paused'};
    }

}

