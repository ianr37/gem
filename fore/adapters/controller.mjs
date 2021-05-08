
export class Controller {

    constructor(presenter) {
        this.presenter = presenter;
        this.activeWorkflows = new Map();
        this.activeWorkflowTasks = new Map();
    }

    startWorkflow(workflow) {
        if (!this.activeWorkflows.has(workflow.flowId)) {
            this.activeWorkflows.set(workflow.wfid, workflow);
        }
        workflow.start(presenter);
    }

    executeAction(action) {
        const task = this.activeWorkflowTasks.get(action.taskId);
        if (task) {
            const flow = this.activeWorkflows.get(task.flowId);
            const outcome = flow.executeAction(action);
            switch (outcome) {
            case 'next':
                
                break;
            default:
                console.log(`workflow: ${flow.flowId}, task: ${task.taskId}, nothing happened`);
                break;
            }
        }
    }

}

