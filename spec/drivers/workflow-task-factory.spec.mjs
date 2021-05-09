
import { BrowserDisplayTask } from '../../fore/drivers/browser/tasks/display.mjs';
import { BrowserWorkflowTaskFactory } from '../../fore/drivers/browser/workflow-task-factory.mjs';

describe('usecases', () => {

    let factory = null;

    beforeEach(() => {
        factory = new BrowserWorkflowTaskFactory();
        expect(factory instanceof BrowserWorkflowTaskFactory).toBeTrue();
    });

    it('should be able to return a workflow task of the correct type', () => {
        const task = factory.createTask('dummy', 'DisplayTask');
        expect(task instanceof BrowserDisplayTask).toBeTrue();
    });

    it('should not find a non-existant workflow task', () => {
        const task = factory.createTask('does not exist', 'not a task type');
        expect(task).toEqual(null);
    });

});

