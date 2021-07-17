
import { MvcController } from '../domain/index.mjs';

export class DesktopController extends MvcController {

    constructor(workflowStore, workflowFactory) {
        super(workflowStore, workflowFactory);
    }

    handleAction(action) {
        const command = action.action;
        const parameters = action.parameters ? action.parameters : {};
        switch (action.action) {
            case 'start-workflow':
                this.startWorkflow(parameters);
                break;
            case 'resume-workflow':
                this.resumeWorkflow(parameters);
                break;
            case 'set-status':
                this.view.setFooterStatus(parameters.status);
                break;
            default:
                throw new Error(`Controller#handleAction: unknown action ${action.action}`);
                break;
        }
    }

}
