
import { readFileSync } from 'fs';

import { ExecutionEnvironment } from '../../fore/domain/index.mjs';
import { createDesktop } from '../../fore/adapters/index.mjs';
import { tasklets } from '../../fore/use-cases/index.mjs';

import { HTMLDocument } from  '../../fore/drivers/testing/html/index.mjs';

describe('the workflow pane', () => {

    const jsonFile = './fore/use-cases/workflow-definitions.json';

    let desktop = null;
    let workflows = null;
    let pane = undefined;

    beforeAll(() => {
        const jsonString = readFileSync(jsonFile);
        workflows = JSON.parse(jsonString);
    });

    beforeEach(() => {
        const document = new HTMLDocument();
        const parent = document.createElement('body');
        const logo = null;
        const env = new ExecutionEnvironment(document, parent, workflows, tasklets, logo);
        desktop = createDesktop(env);
    });

    xit('should exist', () => {
        expect(pane).toBeDefined();
    });

});

