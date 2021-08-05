
import { readFileSync } from 'fs';

import { DesktopFactory } from '../../fore/adapters/index.mjs';
import { taskBuilders } from '../../fore/use-cases/index.mjs';

import { HTMLDocument } from  '../../fore/drivers/testing/html/index.mjs';

describe('the workflow pane', () => {

    const jsonFile = './fore/use-cases/workflow-definitions.json';

    let desktop = null;
    let desktopFactory = null;
    let pane = undefined;

    beforeAll(() => {
        const jsonString = readFileSync(jsonFile);
        const workflowDefinitions = JSON.parse(jsonString);
        desktopFactory = new DesktopFactory(workflowDefinitions, taskBuilders);
    });

    beforeEach(() => {
        desktop = desktopFactory.createDesktop();
        const document = new HTMLDocument();
        const body = document.createElement('body');
        desktop.attachTo(body);
    });

    xit('should exist', () => {
        expect(pane).toBeDefined();
    });

});
