
import { WorkflowFactory } from '../../fore/usecases/index.mjs';
import { SimpleWorkflowStore } from '../../fore/drivers/simple-workflow-store.mjs';

describe('usecases', () => {

    let factory = null;

    beforeEach(() => {
        const store = new SimpleWorkflowStore();
        expect(store).toBeTruthy();
        factory = new WorkflowFactory(store);
        expect(factory).toBeTruthy();
    });

    it('should be able to return a workflow', () => {
        const workflow = factory.createWorkflow('home');
        expect(workflow).toBeTruthy();
    });

    it('should not find a non-existant workflow', () => {
        const workflow = factory.createWorkflow('does not exist');
        expect(workflow).toEqual(null);
    });

});

