
export class MvcController {

    constructor(workflowStore, workflowFactory) {
        this.model = null;
        this.view = null;
        this.workflowStore = workflowStore;
        this.workflowFactory = workflowFactory;
        this.activeWorkflows = new Map();
        this.keepFinishedWorkflows = false;
        this.finishedWorkflows = new Map();
    }

    actionHandler(action) {
        throw new Error('NotYetImplemented');
    }

    startWorkflow(parameters) {
        const definition = this.workflowStore.getDefinition(parameters.name);
        if (! definition) {
            throw new Error(`Controller#startWorkflow: unknown workflow ${parameters.name}`);
        }
        const dummyPresenter = null;
        const workflow = this.workflowFactory.createWorkflow(definition, this.executeAction, dummyPresenter);
        if (! workflow) {
            throw new Error(`Controller#startWorkflow: unknown workflow ${parameters.name}`);
        }
        this.activeWorkflows.set(workflow.flowId, workflow);
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
                if (this.keepFinishedWorkflows) {
                    this.finishedWorkflows.set(workflow.flowId, workflow);
                }
                this.activeWorkflows.delete(workflow.flowId);
                break;
            case 'failed':
                this.finishedWorkflows.set(workflow.flowId, workflow);
                this.activeWorkflows.delete(workflow.flowId);
                break;
            default:
                throw new Error(`Unexpected step status "${result.state}"`);
                break;
        }
    }
}

