
import { MvcController } from '../../domain/index.mjs';

export class WorkpaneController extends MvcController {

    constructor() {
        super();
    }

    handleAction(action) {
        const command = action.action;
        const parameters = action.parameters ? action.parameters : {};
        switch (action.action) {
            default:
                throw new Error(`Controller#handleAction: unknown action ${action.action}`);
                break;
        }
    }

}
