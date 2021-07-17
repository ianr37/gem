
import { Workflow } from './workflow.mjs';

export class WorkflowFactory {

    constructor(parameterFactory, taskBuilders, stepFactory) {
        this.parameterFactory = parameterFactory;
        this.taskBuilders = taskBuilders;
        this.stepFactory = stepFactory;
    }

    createWorkflow(definition, controller) {
        const workflow = new Workflow(definition, this, controller);
        for (const [i, parameterDefinition] of definition.parameters.entries()) {
            const parameter = this.parameterFactory.createParameter(parameterDefinition);
            workflow.addParameter(parameter);
        }
        for (const [i, taskDefinition] of definition.tasks.entries()) {
            workflow.addTaskTemplate({
                name: taskDefinition.name,
                builder: this.taskBuilders.get(taskDefinition.builder),
                fields: taskDefinition.fields
            });
        }
        for (const [i, stepDefinition] of definition.steps.entries()) {
            const step = this.stepFactory.createStep(stepDefinition);
            workflow.addStep(step);
        }
        return workflow;
    }

}

