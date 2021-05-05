
import { Workflow, WorkflowParameter, WorkflowTask } from '../domain/index.mjs';
import { WorkflowParameterFactory } from './workflow-parameter-factory.mjs';
import { WorkflowTaskFactory } from './workflow-task-factory.mjs';

export class WorkflowFactory {

    constructor(store) {
        this.store = store;
        this.parameterFactory = new WorkflowParameterFactory();
        this.taskFactory = new WorkflowTaskFactory();
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
                flow.tasks.push(task.name, this.taskFactory.createTask(task));
            }
            result = flow;
        }
        return result;
    }

}

