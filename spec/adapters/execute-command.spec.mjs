
import { readFileSync } from 'fs';

import { createDesktop } from '../../fore/adapters/index.mjs';
import { taskBuilders } from '../../fore/use-cases/index.mjs';

import { HTMLDocument } from  '../../fore/drivers/testing/index.mjs';

describe('the desktop', () => {

    let desktop = null;
    let workflowDefinitions = null;
    const jsonFile = './fore/use-cases/workflow-definitions.json';

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

    it('should be able execute a command by clicking on a menu button', () => {
        const legend = 'Change Status';
        const command = 'set-status';
        const parameters = {status: "test succeeded"};
        desktop.addNavCommand(legend, command, parameters);
        const button = desktop.view.buttons.get(legend);
        button.click();
        const status = desktop.view.footerStatus.innerText;
        expect(status).toBe('test succeeded');
    });

});

