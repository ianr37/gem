
import { readFileSync } from 'fs';

import { DriverAction, WorkflowFactory, WorkflowStore, WorkflowParameterFactory, WorkflowStepFactory
       } from '../../fore/domain/index.mjs';

import { DesktopController } from '../../fore/adapters/desktop-controller.mjs';

import { JsonWorkflowStore, taskBuilders, Waiter  } from '../../fore/drivers/testing/index.mjs';

describe('controller', () => {

    let controller = null;
    const diary = [];
    let waiter = null;
    let workflowStore = null;
    let workflowFactory = null;
    const jsonFile = './fore/drivers/testing/use-cases/workflows.json';

    beforeAll(() => {
        waiter = new Waiter();
        const stepFactory = new WorkflowStepFactory();
        expect(stepFactory instanceof WorkflowStepFactory).toBeTrue();
        const parameterFactory = new WorkflowParameterFactory();
        expect(parameterFactory instanceof WorkflowParameterFactory).toBeTrue();
        workflowFactory = new WorkflowFactory(parameterFactory, taskBuilders, stepFactory);
        expect(workflowFactory instanceof WorkflowFactory).toBeTrue();
        const jsonString = readFileSync(jsonFile);
        workflowStore = new JsonWorkflowStore(jsonString);
        expect(workflowStore instanceof WorkflowStore).toBeTrue();
    });

    beforeEach(() => {
        controller = new DesktopController(workflowStore, workflowFactory);
    });

    afterAll(() => {
        if (diary.length > 0) {
            console.log('\nDiary start');
            for (const [i, msg] of diary.entries()) {
                console.log(msg);
            }
            console.log('Diary end');
        }
    });

    it('should be able to run a workflow that does not pause', () => {
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
        controller.startWorkflow({name: 'run-test'});
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
    });

    it('should be able to run a workflow that does not pause in keep mode', () => {
        controller.keepFinishedWorkflows = true;
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
        controller.startWorkflow({name: 'run-test'});
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(1);
    });
    
    it('should be able to run a workflow that pauses', async () => {
        controller.keepFinishedWorkflows = false;
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
        controller.startWorkflow({name: 'pause-test'});
        await waiter.waitOneTick();
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
    });

    it('should be able to run a workflow that pauses in keep mode', async () => {
        controller.keepFinishedWorkflows = true;
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
        controller.startWorkflow({name: 'pause-test'});
        await waiter.waitOneTick();
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(1);
    });

});

