
import * as tasks from './tasks/index.mjs';

export const tasklets = new Map([
    ['RunTest', tasks.RunTest],
    ['PauseTest', tasks.PauseTest],
    ['DisplayTask', tasks.DisplayTask],
    ['RxResponseTask', tasks.RxResponseTask],
    ['StoreTask', tasks.StoreTask],
    ['TxRequestTask', tasks.TxRequestTask]
]);

