
import { WorkflowStep } from './step.mjs';

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

