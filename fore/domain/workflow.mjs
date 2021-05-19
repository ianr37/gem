
export class WorklowStepStatus {
    
    constructor(state, message) {
        this.state = state || 'ok';
        this.message = message || 'it worked';
        this.nextStep = null;
    }

}

export class Workflow {

    constructor(name, definition, parameterFactory, taskFactory, presenter) {
        this.flowId = Math.round(Math.random() * 2**64);
        this.name = name;
        this.parameterFactory = parameterFactory;
        this.taskFactory = taskFactory;
        this.presenter = presenter;
        this.stepName = null;
        this.parameters = new Map();
        for (const parameterDefinition in definition.parameters) {
            const parameter = parameterFactory.createParameter(definition.parameters[parameterDefinition]);
            this.parameters.set(parameter.name, parameter);
        }
        this.taskDefinitions = new Map();
        for (const index in definition.tasks) {
            const task = definition.tasks[index];
            this.taskDefinitions.set(task.taskName, task);
        }
        this.steps = new Map();
        for (const index in definition.steps) {
            const step = definition.steps[index];
            this.steps.set(step.stepName, step);
        }
    }

    logStepStatus (step, status) {
        console.log(`${step}: ${status.state} - ${status.message}`);
    }

    run() {
        while (this.stepName) {
            const step = this.steps.get(this.stepName);
            const definition = this.taskDefinitions.get(step.taskName);
            const task = this.taskFactory.createTask(definition.name, definition.taskClass);
            const status = task.run();
            this.logStepStatus(status);
            if (status.state == 'ok' && status.next) {
                this.stepName = this.steps.get(status.nextStep);
            } else {
                break;
            }
        }
        return status;
    }

    start() {
        this.stepName = '$start';
        this.run();
    }

    respondToAction(action) {
    }

}

export class WorkflowFactory {

    constructor(store, parameterFactory, taskFactory) {
        this.store = store;
        this.parameterFactory = parameterFactory;
        this.taskFactory = taskFactory;
    }

    createWorkflow(name) {
        let workflow = null;
        const definition = this.store.getDefinition(name);
        if (definition) {
            workflow = new Workflow(name, definition, this.parameterFactory, this.taskFactory);
        }
        return workflow;
    }

}
