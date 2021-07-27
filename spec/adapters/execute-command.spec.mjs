
import { readFileSync } from 'fs';

import { DesktopFactory } from '../../fore/adapters/index.mjs';

import { HTMLDocument, taskBuilders } from  '../../fore/drivers/testing/index.mjs';

describe('the desktop', () => {

    let desktop = null;
    let desktopFactory = null;
    const jsonFile = './fore/drivers/testing/use-cases/workflows.json';

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

