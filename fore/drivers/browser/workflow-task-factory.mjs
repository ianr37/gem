
import { WorkflowTaskFactory } from '../../domain/index.mjs';
import * as tasks from './tasks/index.mjs';

const knownTasks = new Map([
    ['DisplayTask', tasks.BrowserDisplayTask],
    ['RxResponseTask', tasks.BrowserRxResponseTask],
    ['StoreTask', tasks.BrowserStoreTask],
    ['TxRequestTask', tasks.BrowserTxRequestTask]
]);

export class BrowserWorkflowTaskFactory extends WorkflowTaskFactory {

    constructor() {
        super(knownTasks);
    }

    createTask(name, taskType) {
        return super.createTask(name, taskType);
    }

}

