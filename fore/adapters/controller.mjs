
export class Controller {

    constructor(workflowStore, workflowFactory, presenter) {
        this.workflowStore = workflowStore;
        this.workflowFactory = workflowFactory;
        this.presenter = presenter;
        this.activeWorkflows = new Map();
        this.activeWorkflowTasks = new Map();
        this.keepFinishedWorkflows = false;
        this.finishedWorkflows = new Map();
        this.pausedWorkflows = new Map();
    }

    startWorkflow(name) {
        let result = null;
        const definition = this.workflowStore.getDefinition(name);
        if (definition) {
            const workflow = this.workflowFactory.createWorkflow(definition);
            if (workflow) {
                result = workflow;
                this.activeWorkflows.set(workflow.flowId, workflow);
                workflow.stepName = '$start';
                this.runWorkflow(workflow);
            } else {
                console.log(`Controller#startWorkflow: unknown workflow ${name}`);
            }
        }
        return result;
    }

    resumeWorkflow(flowId) {
        let workflow = null;
        if (this.pausedWorkflows.has(flowId)) {
            workflow = this.pausedWorkflows.get(flowId);
            this.pausedWorkflows.delete(flowId);
            this.runWorkflow(workflow);
        } else {
            console.log(`Controller#resumeWorkflow: unknown workflowId ${flowId}`);
        }
        return workflow;
    }

    runWorkflow(workflow) {
        const status = workflow.run(this.presenter);
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
        let flowId = null;
        if (action) {
            switch (action.action) {
            case 'start-workflow':
                flowId = this.startWorkflow(action.parameters.name);
                break;
            case 'resume-workflow':
                flowId = this.resumeWorkflow(action.parameters.name);
                break;
            default:
                console.log(`Controller#executeAction: unknown action ${action.action}`);
                break;
            }
        } else {
            console.log('Controller#executeAction: null action');
        }
        return flowId;
    }

}

