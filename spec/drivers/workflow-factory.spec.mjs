
import { BrowserWorkflowTaskFactory } from '../../fore/drivers/browser/workflow-task-factory.mjs';
import { SimpleWorkflowStore } from '../../fore/drivers/browser/simple-workflow-store.mjs';
import { Workflow, WorkflowFactory, WorkflowParameterFactory, WorkflowTaskFactory, WorkflowStore } from '../../fore/domain/index.mjs';

describe('usecases', () => {

    let factory = null;

    beforeEach(() => {
        const store = new SimpleWorkflowStore();
        expect(store instanceof WorkflowStore).toBeTrue();
        const parameterFactory = new WorkflowParameterFactory();
        expect(parameterFactory instanceof WorkflowParameterFactory).toBeTrue();
        const taskFactory = new BrowserWorkflowTaskFactory();
        expect(taskFactory instanceof WorkflowTaskFactory).toBeTrue();
        factory = new WorkflowFactory(store, parameterFactory, taskFactory);
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

