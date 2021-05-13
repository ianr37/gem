
import { Workflow, WorkflowParameter, WorkflowTask } from './workflows.mjs';

export class WorkflowTaskFactory {

    constructor(knownTasks) {
        this.knownTasks = knownTasks;
    }

    createTask(name, taskType) {
        let result = null;
        if (this.knownTasks.has(taskType)) {
            const builder = this.knownTasks.get(taskType);
            result = new builder(name);
        }
        return result;
    }

}

export class WorkflowParameterFactory {

    constructor() {
    }

    createParameter(x) {
        return new WorkflowParameter(x);
    }

}

export class WorkflowFactory {

    constructor(store, parameterFactory, taskFactory) {
        this.store = store;
        this.parameterFactory = parameterFactory;
        this.taskFactory = taskFactory;
    }

    createWorkflow(name) {
        let result = null;
        const wfd = this.store.getDefinition(name);
        if (wfd) {
            const flow = new Workflow(name);
            for (const parameter of wfd.parameters) {
                flow.parameters.set(parameter.name, this.parameterFactory.createParameter(parameter));
            }
            for (const task of wfd.tasks) {
                flow.tasks.set(task.name, task);
            }
            result = flow;
        }
        return result;
    }

}

