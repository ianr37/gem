
export class WorkflowStep {

    constructor(name, taskName, jumps) {
        this.name = name;
        this.taskName = taskName;
        this.jumps = new Map();
    }

    addJump(stateName, stepName) {
        this.jumps.set(stateName, stepName);
    }

    deleteJump(stateName) {
        this.jumps.delete(stateName);
    }

}

