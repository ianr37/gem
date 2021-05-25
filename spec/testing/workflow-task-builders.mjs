
import * as tasks from './tasks/index.mjs';

export const taskBuilders = new Map([
    ['Display', tasks.Display],
    ['Done', tasks.Done],
    ['PauseTest', tasks.PauseTest],
    ['RunTest', tasks.RunTest],
    ['RxResponse', tasks.RxResponse],
    ['SetParameter', tasks.SetParameter],
    ['Store', tasks.Store],
    ['TxRequest', tasks.TxRequest]
]);

