
import { readFileSync } from 'fs';

import { ExecutionEnvironment } from '../../fore/domain/index.mjs';
import { createDesktop } from '../../fore/adapters/index.mjs';
import { tasklets } from '../../fore/use-cases/index.mjs';
import { Configuration } from '../../fore/drivers/configuration.mjs';

import { HTMLDocument } from  '../../fore/drivers/testing/html/index.mjs';

describe('the workflow pane', () => {

    let cfg = null;
    let desktop = null;
    let workflows = null;
    let pane = undefined;
    const jsonFile = './fore/drivers/testing/configurations/full.json';

    beforeAll(() => {
        const jsonString = readFileSync(jsonFile);
        const rawConfiguration = JSON.parse(jsonString);
        cfg = new Configuration(rawConfiguration);
    });

    beforeEach(() => {
        const document = new HTMLDocument();
        const parent = document.createElement('body');
        const logo = null;
        const env = new ExecutionEnvironment(cfg, logo, tasklets, document, parent);
        desktop = createDesktop(env);
    });

    xit('should exist', () => {
        expect(pane).toBeDefined();
    });

});

