
import { SimpleWorkflowStore } from '../../fore/drivers/simple-workflow-store.mjs';
import { Workflow, WorkflowStore } from '../../fore/domain/index.mjs';
import { WorkflowFactory } from '../../fore/usecases/index.mjs';

describe('usecases', () => {

    let factory = null;

    beforeEach(() => {
        const store = new SimpleWorkflowStore();
        expect(store instanceof WorkflowStore).toBeTrue();
        factory = new WorkflowFactory(store);
        expect(factory instanceof WorkflowFactory).toBeTrue();
    });

    it('should be able to return a workflow', () => {
        const workflow = factory.createWorkflow('home');
        expect(workflow instanceof Workflow).toBeTrue();
    });

    it('should not find a non-existant workflow', () => {
        const workflow = factory.createWorkflow('does not exist');
        expect(workflow).toEqual(null);
    });

});

