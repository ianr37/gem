
import { readFileSync } from 'fs';

import { WorkflowStore } from '../../fore/domain/index.mjs';

describe('WorkflowStore', () => {

    let store = null;
    const jsonFile = './fore/drivers/testing/use-cases/workflows.json';

    beforeAll(() => {
        const jsonString = readFileSync(jsonFile);
        const definitions = JSON.parse(jsonString);
        store = new WorkflowStore(definitions);
        expect(store instanceof WorkflowStore).toBeTrue();
    });

    it('should be able to return a definition', () => {
        const definition = store.getDefinition('wf1');
        expect(definition).toBeTruthy();
    });

    it('should not find a non-existant definition', () => {
        const definition = store.getDefinition('does not exist');
        expect(definition).toEqual(null);
    });

});

