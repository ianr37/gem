
export class WorkflowTask {

    constructor(flowId, name, fields) {
        this.taskId = Math.round(Math.random() * 2**64);
        this.flowId = flowId;
        this.name = name;
        this.fields = fields;
    }

    run(workflow) {
        throw Error('execute method not yet implemented');
    }

}

