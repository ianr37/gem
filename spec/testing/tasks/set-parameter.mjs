
import { WorkflowTask } from '../../../fore/domain/index.mjs';

export class SetParameter extends WorkflowTask {

    execute() {
        return {status: "ok"};
    }
}

