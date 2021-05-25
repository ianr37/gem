
export class WorkflowStepStatus {
    
    constructor(state, message) {
        this.state = state || 'ok';
        this.message = message || 'it worked';
    }

}

export class Workflow {

    constructor(definition, factory) {
        this.flowId = Math.round(Math.random() * 2**64);
        this.definition = definition;
        this.factory = factory;
        this.name = definition.name;
        this.presenter = null;
        this.stepName = null;
        this.parameters = new Map();
        this.taskTemplates = new Map();
        this.steps = new Map();
        this.log = [];
    }

    addParameter(parameter) {
        this.parameters.set(parameter.name, parameter);
    }

    deleteParameter(name) {
        this.parameters.delete(name);
    }

    addStep(step) {
        this.steps.set(step.name, step);
    }

    deleteStep(name) {
        this.steps.delete(name);
    }

    addTaskTemplate(template) {
        this.taskTemplates.set(template.name, template);
    }

    deleteTaskTemplate(name) {
        this.taskTemplates.delete(name);
    }


    logStepStatus (step, status) {
        this.log.push(`${step}: ${status.state} - ${status.message}`);
    }

    run() {
        let status = null;
        while (this.stepName) {
            const step = this.steps.get(this.stepName);
            const template = this.taskTemplates.get(step.taskName);
            const task = new template.builder(this.flowId, template.name, template.fields);
            status = task.run();
            this.logStepStatus(step.name, status);
            const nextStep = step.jumps.get(status.state) || null;
            switch (nextStep) {
                case '$done':
                    this.stepName = null;
                    break;
                case '$fail':
                    this.stepName = null;
                    break;
                default:
                    this.stepName = nextStep;
                    break;
            }
        }
        return status;
    }

    start(presenter) {
        this.stepName = '$start';
        this.run();
    }

    respondToAction(action) {
    }

}

export class WorkflowFactory {

    constructor(parameterFactory, taskBuilders, stepFactory) {
        this.parameterFactory = parameterFactory;
        this.taskBuilders = taskBuilders;
        this.stepFactory = stepFactory;
    }

    createWorkflow(definition) {
        const workflow = new Workflow(definition, this);
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

