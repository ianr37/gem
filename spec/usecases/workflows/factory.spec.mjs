
import { WorkflowFactory } from '../../../fore/usecases/workflows/factory.mjs';

describe('usecases', () => {

    let factory = null;

    beforeEach(() => {
        factory = new WorkflowFactory();
        expect(factory).toBeDefined();
    });


    it('should be able to return a workflow', () => {
        const workflow = factory.createWorkflow('home');
        expect(workflow).toBeDefined();
    });

    it('should not find a non-existant workflow', () => {
        const workflow = factory.createWorkflow('does not exist');
        expect(workflow).toBeNull();
    });

});

