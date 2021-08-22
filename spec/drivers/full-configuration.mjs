
import { readFileSync } from 'fs';

import { Configuration } from '../../fore/drivers/configuration.mjs';

describe('The configuration', () => {

    const jsonFile = './fore/drivers/testing/configurations/full.json';

    let rawConfiguration = null;
    let cfg = null;

    beforeAll(() => {
        const jsonString = readFileSync(jsonFile);
        rawConfiguration = JSON.parse(jsonString);
    });

    beforeEach(() => {
        cfg = new Configuration(rawConfiguration);
    });

    it('should exist', () => {
        expect(cfg).toBeDefined();
    });

    it('should have a value for the header text', () => {
        const headerText = cfg.getHeaderText();
        expect(headerText).toEqual('The header text');
    });

    it('should have a value for the footer text', () => {
        const footerText = cfg.getFooterText();
        expect(footerText).toEqual('The footer text');
    });

});

