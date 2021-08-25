
import { readFileSync } from 'fs';

import { ExecutionEnvironment } from '../../fore/domain/index.mjs';
import { createDesktop } from '../../fore/adapters/index.mjs';
import { tasklets } from '../../fore/use-cases/index.mjs';
import { Configuration } from '../../fore/drivers/configuration.mjs';

import { HTMLDocument } from  '../../fore/drivers/testing/index.mjs';

describe('the desktop', () => {

    let cfg = null;
    let desktop = null;
    let workflows = null;
    const jsonFile = './fore/drivers/testing/configurations/full.json';

    beforeAll(() => {
        const jsonString = readFileSync(jsonFile);
        const rawConfiguration = JSON.parse(jsonString);
        cfg = new Configuration(rawConfiguration);
    });

    beforeEach(() => {
        const document = new HTMLDocument();
        const body = document.createElement('body');
        const logo = null;
        const env = new ExecutionEnvironment(cfg, logo, tasklets, document);
        desktop = createDesktop(env);
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

