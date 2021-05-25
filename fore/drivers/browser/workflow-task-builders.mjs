
import * as tasks from './tasks/index.mjs';

export const taskBuilders = new Map([
    ['DisplayTask', tasks.BrowserDisplayTask],
    ['RxResponseTask', tasks.BrowserRxResponseTask],
    ['StoreTask', tasks.BrowserStoreTask],
    ['TxRequestTask', tasks.BrowserTxRequestTask]
]);

