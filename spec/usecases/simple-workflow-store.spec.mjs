
import { SimpleWorkflowStore } from '../../fore/drivers/simple-workflow-store.mjs';

describe('usecases', () => {

    let store = null;

    beforeEach(() => {
        store = new SimpleWorkflowStore();
        expect(store).toBeTruthy();
    });

    it('should be able to return a definition', () => {
        const definition = store.getDefinition('home');
        expect(definition).toBeTruthy();
    });

    it('should not find a non-existant definition', () => {
        const definition = store.getDefinition('does not exist');
        expect(definition).toEqual(null);
    });

});

