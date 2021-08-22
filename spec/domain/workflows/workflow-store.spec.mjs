
import { readFileSync } from 'fs';

import { WorkflowStore } from '../../../fore/domain/index.mjs';
import { Configuration } from '../../../fore/drivers/configuration.mjs';

describe('WorkflowStore', () => {

    let store = null;
    const jsonFile = './fore/drivers/testing/configurations/full.json'

    beforeAll(() => {
        const jsonString = readFileSync(jsonFile);
        const rawConfiguration = JSON.parse(jsonString);
        const cfg = new Configuration(rawConfiguration);
        store = new WorkflowStore(cfg.getWorkflows());
        expect(store instanceof WorkflowStore).toBeTrue();
    });

    it('should be able to return a definition', () => {
        const definition = store.getDefinition('wf1');
        expect(definition).toBeTruthy();
    });

    it('should not find a non-existant definition', () => {
        const f = () => {
            return store.getDefinition('does not exist');
        }
        expect(f).toThrowError(Error, "Unknown workflow 'does not exist'");
    });

});

