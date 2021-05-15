
import { WorkflowTaskFactory } from '../../fore/domain/index.mjs';
import * as tasks from './tasks/index.mjs';

const knownTasks = new Map([
    ['Display', tasks.Display],
    ['Done', tasks.Done],
    ['RxResponse', tasks.RxResponse],
    ['SetParameter', tasks.SetParameter],
    ['Store', tasks.Store],
    ['TxRequest', tasks.TxRequest]
]);

export class TestTaskFactory extends WorkflowTaskFactory {

    constructor() {
        super(knownTasks);
    }

    createTask(name, taskType) {
        return super.createTask(name, taskType);
    }

}

