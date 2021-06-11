
import { readFileSync } from 'fs';

import  { Controller, Presenter } from '../../fore/adapters/index.mjs';
import  { DriverAction, WorkflowFactory, WorkflowStore, WorkflowParameterFactory, WorkflowStepFactory
            } from '../../fore/domain/index.mjs';
import { JsonWorkflowStore } from '../../fore/drivers/browser/workflow-store.mjs';

import { GemRoot, taskBuilders, Waiter } from '../testing/index.mjs';

describe('controller-async', () => {

    let controller = null;
    let gemRoot = null;
    let waiter = null;
    let workflowStore = null;
    let workflowFactory = null;
    const jsonFile = './spec/testing/workflows.json';
    const diary = [];

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
        controller = new Controller(workflowStore, workflowFactory);
        expect(controller instanceof Controller).toBeTrue();
        gemRoot = new GemRoot();
        gemRoot.controllerCallback = controller.executeAction;
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

    it('should be able to run a workflow that pauses', async () => {
        controller.keepFinishedWorkflows = false;
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
        const start = new DriverAction('start-workflow', {name: 'pause-test'});
        const flowId = gemRoot.fakeEvent(start);
        await waiter.waitOneTick();
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
    });

    it('should be able to run a workflow that pauses in keep mode', async () => {
        controller.keepFinishedWorkflows = true;
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
        const start = new DriverAction('start-workflow', {name: 'pause-test'});
        const flowId = gemRoot.fakeEvent(start);
        await waiter.waitOneTick();
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(1);
    });

});

