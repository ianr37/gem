
import { TestDisplayTask } from '../testing/tasks/index.mjs';
import { TestTaskFactory } from '../testing/task-factory.mjs';
import { WorkflowTaskFactory } from '../../fore/domain/index.mjs';


describe('usecases', () => {

    let factory = null;

    beforeAll(() => {
        factory = new TestTaskFactory();
        expect(factory instanceof WorkflowTaskFactory).toBeTrue();
    });

    it('should be able to return a workflow task of the correct type', () => {
        const task = factory.createTask('dummy', 'DisplayTask');
        expect(task instanceof TestDisplayTask).toBeTrue();
    });

    it('should not find a non-existant workflow task', () => {
        const task = factory.createTask('does not exist', 'not a task type');
        expect(task).toEqual(null);
    });

});

