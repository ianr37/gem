
import { WorkflowTask, DriverAction } from '../../domain/index.mjs';

export class PauseTest extends WorkflowTask {

    constructor(workflow, name, fields) {
        super(workflow, name, fields);
    }

    run() {
        const callBack = () => {
            const result =  {status: 'finished', rc: 0, msg: 'Succeeded'};
            const resume = new DriverAction('resume-workpane', {id: this.workflow.flowId, result: result});
            this.workflow.controller.handleAction(resume);
        };
        setTimeout(callBack);
        return {status: 'paused', rc: 0, msg: 'Paused'};
    }

}

