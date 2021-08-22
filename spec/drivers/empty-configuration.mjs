
import { readFileSync } from 'fs';

import { Configuration } from '../../fore/drivers/configuration.mjs';

describe('The configuration', () => {

    const jsonFile = './fore/drivers/testing/configurations/empty.json';

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
    
    it('should detect a missing value for the header text', () => {
        const f = () => {
            return cfg.getHeaderText();
        }
        expect(f).toThrowError(Error, 'Configuration: header text missing');
    });
    
    it('should detect a missing value for the footer text', () => {
        const f = () => {
            return cfg.getFooterText();
        }
        expect(f).toThrowError(Error, 'Configuration: footer text missing');
    });

});

