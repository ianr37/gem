
import { MvcController } from '../domain/index.mjs';

export class WorkflowPaneController extends MvcController {

    constructor() {
        super();
    }

    handleAction(action) {
        const command = action.action;
        const parameters = action.parameters ? action.parameters : {};
        switch (action.action) {
            case 'submit-form':
                console.log('submit-form received');
                break;
            default:
                throw new Error(`handleAction: unknown action ${action.action}`);
                break;
        }
    }

}

