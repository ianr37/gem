
export class WorkflowTask {

    constructor(workflow, name, fields) {
        this.taskId = Math.round(Math.random() * 2**64);
        this.workflow = workflow;
        this.name = name;
        this.fields = fields;
    }

    run() {
        throw Error('execute method not yet implemented');
    }

}

