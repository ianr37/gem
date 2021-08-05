
import { MvcController } from '../../domain/index.mjs';

export class DesktopController extends MvcController {

    constructor(workflowStore, workflowFactory) {
        super();
        this.workflowStore = workflowStore;
        this.workflowFactory = workflowFactory;
        this.activeWorkflows = new Map();
        this.workflowStack = [];
        this.keepFinishedWorkflows = false;
        this.finishedWorkflows = new Map();
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
    
    startWorkflow(parameters) {
        const definition = this.workflowStore.getDefinition(parameters.name);
        if (! definition) {
            throw new Error(`Controller#startWorkflow: unknown workflow ${parameters.name}`);
        }
        const workflow = this.workflowFactory.createWorkflow(definition, this);
        if (! workflow) {
            throw new Error(`Controller#startWorkflow: unknown workflow ${parameters.name}`);
        }
        this.pushWorkflow(workflow);
        this.executeWorkflow(workflow, null);
    }

    resumeWorkflow(parameters) {
        this.executeWorkflow(parameters.workflow, parameters.result);
    }

    executeWorkflow(workflow, previousOutcome) {
        const result = workflow.execute(previousOutcome);
        switch (result.status) {
            case 'paused':
                break;
            case 'finished':
                this.popWorkflow(workflow);
                break;
            case 'failed':
                this.popWorkflow(workflow);
                break;
            default:
                throw new Error(`Unexpected step status "${result.state}"`);
                break;
        }
    }

    pushWorkflow(workflow) {
        this.activeWorkflows.set(workflow.flowId, workflow);
        this.workflowStack.push(workflow);
    }

    popWorkflow(workflow) {
        this.activeWorkflows.delete(workflow.flowId);
        this.workflowStack.pop(workflow);
        if (this.keepFinishedWorkflows) {
            this.finishedWorkflows.set(workflow.flowId, workflow);
        }
    }

}
