
import { TestTaskFactory } from '../testing/task-factory.mjs';
import { JsonWorkflowStore } from '../../fore/drivers/node/workflow-store.mjs';

import { Workflow, WorkflowFactory, WorkflowParameterFactory, WorkflowTaskFactory,
         WorkflowStore } from '../../fore/domain/index.mjs';

describe('workflow factory', () => {

    let factory = null;

    beforeAll(() => {
        const store = new JsonWorkflowStore('./spec/testing/factory-test.json');
        expect(store instanceof WorkflowStore).toBeTrue();
        const taskFactory = new TestTaskFactory();
        expect(taskFactory instanceof WorkflowTaskFactory).toBeTrue();
        const parameterFactory = new WorkflowParameterFactory();
        expect(parameterFactory instanceof WorkflowParameterFactory).toBeTrue();
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

