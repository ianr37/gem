
export class WorkflowTask {

    constructor(name, workflowId) {
        this.taskId = Math.round(Math.random() * 2**64);
        this.name = name;
        this.flowId = workflowId;
    }

    execute(workflow) {
        throw Error('execute method not yet implemented');
    }

}

export class WorkflowTaskFactory {

    constructor(knownTasks) {
        this.knownTasks = knownTasks;
    }

    createTask(name, taskType) {
        let result = null;
        if (this.knownTasks.has(taskType)) {
            const builder = this.knownTasks.get(taskType);
            result = new builder(name);
        }
        return result;
    }

}

