
export class Controller {

    constructor(workflowFactory, presenter) {
        this.workflowFactory = workflowFactory;
        this.presenter = presenter;
        this.activeWorkflows = new Map();
        this.activeWorkflowTasks = new Map();
    }

    startWorkflow(name) {
        const workflow = this.workflowFactory.createWorkflow(name);
        if (workflow) {
            this.activeWorkflows.set(workflow.wfid, workflow);
            workflow.start(this.presenter);
        } else {
            console.log(`Controller#startWorkflow: unknown workflow ${name}`);
        }
    }

    executeAction(action) {
        if (action) {
            switch (action.action) {
            case 'start workflow':
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

