
import { WorkflowStepStatus } from './workflow-step.mjs';

export class Workflow {

    constructor(definition, factory, actionCallback, presenter) {
        this.flowId = Math.round(Math.random() * 2**64);
        this.state = 'created';
        this.definition = definition;
        this.factory = factory;
        this.actionCallback = actionCallback;
        this.presenter = presenter;
        this.name = definition.name;
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

    execute() {
        let outcome = null;
        if (this.state == 'created') {
            this.nextStep = this.definition.start;
            this.state = 'running';
        }
        while (this.state != 'paused' && this.state != 'finished') {
            const step = this.steps.get(this.stepName);
            outcome = this._runTask(step);
            switch (outcome.state) {
                case 'paused':
                    this.state = 'paused';
                    break;
                case 'failed':
                    this.state = 'failed';
                    break;
                default:
                    this.stepName = step.jumps.get(outcome.state);
                    if (! this.stepName) {
                        this.state = 'failed';
                        outcome = new  WorkflowStepStatus('failed', `Unknown step [${outcome.state}]`);
                    }
                    break;
            }
        }
        return outcome;
    }

    _runTask(step) {
        let outcome = null;
        try {
            const template = this.taskTemplates.get(step.taskName);
            const task = new template.builder(this, template.name, template.fields);
            outcome = task.run();
        } catch(ex) {
            outcome = new WorkflowStepStatus('failed', ex);
        }
        this.logStepStatus(step.name, outcome);
        return outcome;
    }

}

export class WorkflowFactory {

    constructor(parameterFactory, taskBuilders, stepFactory) {
        this.parameterFactory = parameterFactory;
        this.taskBuilders = taskBuilders;
        this.stepFactory = stepFactory;
    }

    createWorkflow(definition, actionCallback, presenter) {
        const workflow = new Workflow(definition, this, actionCallback, presenter);
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

