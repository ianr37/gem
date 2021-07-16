
import { MvcController } from '../domain/index.mjs';

export class DesktopController extends MvcController {

    constructor(workflowStore, workflowFactory) {
        super(workflowStore, workflowFactory);
    }

    actionHandler(action) {
        const command = action.action;
        const parameters = action.parameters ? JSON.parse(action.parameters) : {};
        switch (action.action) {
            case 'start-workflow':
                this.startWorkflow(parameters);
                break;
            case 'resume-workflow':
                this.resumeWorkflow(parameters);
                break;
            case 'change-status':
                this.view.setFooterStatus(parameters.status);
                break;
            default:
                throw new Error(`Controller#actionHandler: unknown action ${action.action}`);
                break;
        }
    }

}
