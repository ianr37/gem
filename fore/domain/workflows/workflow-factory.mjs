
import { Workflow } from './workflow.mjs';

export class WorkflowFactory {

    constructor(workflowStore, parameterFactory, taskFactory, stepFactory) {
        this.workflowStore = workflowStore;
        this.parameterFactory = parameterFactory;
        this.taskFactory = taskFactory;
        this.stepFactory = stepFactory;
    }

    createWorkflow(name, controller) {
        const definition = this.workflowStore.getDefinition(name);
        const workflow = new Workflow(definition, this, controller);
        for (const [i, parameterDefinition] of definition.parameters.entries()) {
            const parameter = this.parameterFactory.createParameter(parameterDefinition);
            workflow.addParameter(parameter);
        }
        for (const [i, taskDefinition] of definition.tasks.entries()) {
            workflow.addTaskTemplate({
                name: taskDefinition.name,
                builder: this.taskFactory.createTask(taskDefinition.builder),
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

