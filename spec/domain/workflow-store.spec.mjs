
import { JsonWorkflowStore } from '../../fore/drivers/node/workflow-store.mjs';

describe('usecases', () => {

    let store = null;
    const jsonFile = './spec/testing/store-test.json';

    beforeAll(() => {
        store = new JsonWorkflowStore(jsonFile);
        expect(store instanceof JsonWorkflowStore).toBeTrue();
    });

    it('should be able to return a definition', () => {
        const definition = store.getDefinition('test1');
        expect(definition).toBeTruthy();
    });

    it('should not find a non-existant definition', () => {
        const definition = store.getDefinition('does not exist');
        expect(definition).toEqual(null);
    });

});

