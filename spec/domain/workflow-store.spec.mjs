
import { readFileSync } from 'fs';

import { JsonWorkflowStore } from '../../fore/drivers/browser/workflow-store.mjs';

describe('WorkflowStore', () => {

    let store = null;
    const jsonFile = './spec/testing/workflows.json';

    beforeAll(() => {
        const jsonString = readFileSync(jsonFile);
        store = new JsonWorkflowStore(jsonString);
        expect(store instanceof JsonWorkflowStore).toBeTrue();
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

