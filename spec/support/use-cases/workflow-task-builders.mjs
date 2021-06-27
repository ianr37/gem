
import * as tasks from './tasks/index.mjs';

export const taskBuilders = new Map([
    ['PauseTest', tasks.PauseTest],
    ['RunTest', tasks.RunTest]
]);

