
import { WorkflowTask } from '../../../fore/domain/index.mjs';

import { ApiGateway } from '../apigw.mjs';

export class TxRequest extends WorkflowTask {

    constructor(workflow, name, fields) {
        super(workflow, name, fields);
    }

    run(presenter) {
        super.run(presenter);
    }

}

