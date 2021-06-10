
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

export class WorkflowStepFactory {

    createStep(definition) {
        const step = new WorkflowStep();
        if ('name' in definition) {
            step.name = definition.name;
        } else {
            throw new Error('WorkflowStepFactory: step name not given');
        }
        if ('task' in definition) {
            step.taskName = definition.task;
        } else {
            throw new Error('WorkflowStepFactory: task name not given');
        }
        if ('jumps' in definition) {
            for (const [i, jump] of definition.jumps.entries()) {
                step.addJump(jump.state, jump.target);
            }
        } else {
            throw new Error('WorkflowStepFactory: jumps not given');
        }
        return step;
    }

}
