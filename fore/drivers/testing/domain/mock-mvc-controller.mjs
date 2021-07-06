
import { MvcController } from '../../../domain/index.mjs';

export class MockMvcController extends MvcController {

    constructor(workflowStore, workflowFactory) {
        super(workflowStore, workflowFactory);
    }

}

