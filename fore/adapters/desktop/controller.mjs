
import { MvcController } from '../../domain/index.mjs';

import { createWorkpane } from '../workpane/index.mjs';

export class DesktopController extends MvcController {

    constructor(workflowFactory) {
        super();
        this.workflowFactory = workflowFactory;
        this.activeWorkpanes = new Map();
        this.workpaneStack = [];
        this.keepFinishedWorkpanes = false;
        this.finishedWorkpanes = new Map();
    }

    handleAction(action) {
        const command = action.action;
        const parameters = action.parameters ? action.parameters : {};
        switch (action.action) {
            case 'start-workpane':
                this.startWorkpane(parameters);
                break;
            case 'resume-workpane':
                this.resumeWorkpane(parameters);
                break;
            case 'set-status':
                this.triad.setFooterStatus(parameters.status);
                break;
            default:
                throw new Error(`Controller#handleAction: unknown action ${action.action}`);
                break;
        }
    }

    startWorkpane(parameters) {
        const workpane = createWorkpane(this.triad);
        workpane.workflow = this.workflowFactory.createWorkflow(parameters.name, this);
        this.pushWorkpane(workpane);
        this.executeWorkpane(workpane, null);
    }
    
    resumeWorkpane(parameters) {
        const workpane = this.getWorkpane(parameters.id);
        this.executeWorkpane(workpane, parameters.result);
    }

    executeWorkpane(workpane, previousOutcome) {
        const result = workpane.execute(previousOutcome);
        switch (result.status) {
            case 'paused':
                break;
            case 'finished':
                this.popWorkpane(workpane);
                break;
            case 'failed':
                this.popWorkpane(workpane);
                break;
            default:
                throw new Error(`Unexpected step status "${result.state}"`);
                break;
        }
    }

    getWorkpane(id) {
        return this.activeWorkpanes.get(id);
    }

    pushWorkpane(workpane) {
        this.activeWorkpanes.set(workpane.getId(), workpane);
        this.workpaneStack.push(workpane);
    }

    popWorkpane(workpane) {
        this.activeWorkpanes.delete(workpane.getId());
        this.workpaneStack.pop(workpane);
        if (this.keepFinishedWorkpanes) {
            this.finishedWorkpanes.set(workpane.getId(), workpane);
        }
    }

}
