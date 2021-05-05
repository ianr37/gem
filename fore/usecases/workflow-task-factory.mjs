
import { WorkflowTask } from '../domain/index.mjs';
import * as tasks from './tasks/index.mjs';

const knownTasks = new Map([
    ['DisplayFormTask', tasks.DisplayFormTask],
    ['DisplayHomeTask', tasks.DisplayHomeTask],
    ['RxResponseTask', tasks.RxResponseTask],
    ['StoreLocallyTask', tasks.StoreLocallyTask],
    ['TxRequestTask', tasks.TxRequestTask]
]);

export class WorkflowTaskFactory {

    constructor() {
    }

    createTask(name, taskType) {
        let result = null;
        if (knownTasks.has(taskType)) {
            const builder = knownTasks.get(taskType);
            result = new builder(name);
        }
        return result;
    }

}

