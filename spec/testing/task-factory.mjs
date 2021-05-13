
import { WorkflowTaskFactory } from '../../fore/domain/index.mjs';
import * as tasks from './tasks/index.mjs';

const knownTasks = new Map([
    ['DisplayTask', tasks.TestDisplayTask],
    ['RxResponseTask', tasks.TestRxResponseTask],
    ['StoreTask', tasks.TestStoreTask],
    ['TxRequestTask', tasks.TestTxRequestTask]
]);

export class TestTaskFactory extends WorkflowTaskFactory {

    constructor() {
        super(knownTasks);
    }

    createTask(name, taskType) {
        return super.createTask(name, taskType);
    }

}

