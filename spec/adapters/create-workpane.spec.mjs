
import { readFileSync } from 'fs';

import { ExecutionEnvironment } from '../../fore/domain/index.mjs';
import { createDesktop, createWorkpane } from '../../fore/adapters/index.mjs';
import { tasklets } from '../../fore/use-cases/index.mjs';
import { Configuration } from '../../fore/drivers/configuration.mjs';

import { HTMLDocument } from  '../../fore/drivers/testing/html/index.mjs';

describe('The workflow pane', () => {

    let cfg = null;
    let desktop = null;
    let pane = undefined;
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
        pane = createWorkpane(desktop);
        const desktopRoot = desktop.getRoot();
        pane.attachTo(desktopRoot);
    });

    it('should exist', () => {
        expect(pane).toBeDefined();
    });

});

