
import { WorkflowTask } from '../../../../fore/domain/index.mjs';

export class RunTest extends WorkflowTask {

    constructor(workflow, name, fields) {
        super(workflow, name, fields);
    }

    run() {
        return {status: 'finished', rc: 0, msg: 'Succeeded'};
    }
}

