
import { WorkflowTaskFactory } from '../../fore/usecases/index.mjs';
import * as tasks from '../../fore/usecases/tasks/index.mjs';

describe('usecases', () => {

    let factory = null;

    beforeEach(() => {
        factory = new WorkflowTaskFactory();
        expect(factory instanceof WorkflowTaskFactory).toBeTrue();
    });

    it('should be able to return a workflow task of the correct type', () => {
        const task = factory.createTask('dummy', 'DisplayTask');
        expect(task instanceof tasks.DisplayTask).toBeTrue();
    });

    it('should not find a non-existant workflow task', () => {
        const task = factory.createTask('does not exist', 'not a task type');
        expect(task).toEqual(null);
    });

});

