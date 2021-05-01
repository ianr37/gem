
import { Workflow, WorkflowParameter, WorkflowTask } from '../../domain/index.mjs';
import { getDefinition } from './definitions.mjs';
import { ParameterFactory } from '../parameters/index.mjs';
import { TaskFactory } from '../tasks/index.mjs';

export class WorkflowFactory {

    constructor() {
        this.parameterFactory = new ParameterFactory();
        this.taskFactory = new TaskFactory();
    }

    createWorkflow(name) {
        let result = null;
        const wfd = getDefinition(name);
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

