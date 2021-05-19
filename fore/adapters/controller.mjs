
export class Controller {

    constructor(workflowFactory, presenter) {
        this.workflowFactory = workflowFactory;
        this.presenter = presenter;
        this.activeWorkflows = new Map();
        this.activeWorkflowTasks = new Map();
        this.keepFinishedWorkflows = false;
        this.finishedWorkflows = [];
        this.pausedWorkflows = [];
    }

    startWorkflow(name) {
        const workflow = this.workflowFactory.createWorkflow(name);
        if (workflow) {
            this.activeWorkflows.set(workflow.wfid, workflow);
            this.runWorkflow(workflow);
        } else {
            console.log(`Controller#startWorkflow: unknown workflow ${name}`);
        }
    }

    runWorkflow(workflow) {
        status = workflow.run(this.presenter);
        switch (status.state) {
            case 'ok':
                if (this.keepFinishedWorkflows) {
                    this.finishedWorkflows.set(workflow.flowId, workflow);
                }
                this.activeWorkflows.delete(workflow.flowId);
                break;
            case 'pause':
                this.pausedWorkflows.set(workflow.flowId, workflow);
                break;
            case 'fail':
                this.finishedWorkflows.set(workflow.flowId, workflow);
                this.activeWorkflows.delete(workflow.flowId);
                break;
            default:
                throw new Error(`Unknown step status "${status.state}"`);
                break;
        }
    }

    executeAction(action) {
        if (action) {
            switch (action.action) {
            case 'start-workflow':
                this.startWorkflow(action.parameters.name);
                break;

            default:
                console.log('Controller#executeAction: unknown action ${action.action}');
                break;
            }
        } else {
            console.log('Controller#executeAction: null action');
        }
    }

}

