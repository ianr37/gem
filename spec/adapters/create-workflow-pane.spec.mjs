
import { readFileSync } from 'fs';

import { createDesktop } from '../../fore/adapters/index.mjs';
import { taskBuilders } from '../../fore/use-cases/index.mjs';

import { HTMLDocument } from  '../../fore/drivers/testing/html/index.mjs';

describe('the workflow pane', () => {

    const jsonFile = './fore/use-cases/workflow-definitions.json';

    let desktop = null;
    let workflowDefinitions = null;
    let pane = undefined;

    beforeAll(() => {
        const jsonString = readFileSync(jsonFile);
        workflowDefinitions = JSON.parse(jsonString);
    });

    beforeEach(() => {
        desktop = createDesktop(workflowDefinitions, taskBuilders);
        const document = new HTMLDocument();
        const body = document.createElement('body');
        desktop.attachTo(body);
    });

    xit('should exist', () => {
        expect(pane).toBeDefined();
    });

});
