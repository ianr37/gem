
import { readFile, readFileSync } from 'fs';

import  { Controller, Presenter } from '../../fore/adapters/index.mjs';
import  { DriverAction, WorkflowFactory, WorkflowStore, WorkflowParameterFactory, WorkflowStepFactory
            } from '../../fore/domain/index.mjs';
import { JsonWorkflowStore } from '../../fore/drivers/browser/workflow-store.mjs';

import { taskBuilders } from '../testing/index.mjs';

describe('controller', () => {

    const jsonFile = './spec/testing/workflows.json';
    const diary = [];
    let controller = null;
    let workflowStore = null;
    let workflowFactory = null;

    beforeAll(() => {
        const jsonString = readFileSync(jsonFile);
        workflowStore = new JsonWorkflowStore(jsonString);
        expect(workflowStore instanceof WorkflowStore).toBeTrue();
        const stepFactory = new WorkflowStepFactory();
        expect(stepFactory instanceof WorkflowStepFactory).toBeTrue();
        const parameterFactory = new WorkflowParameterFactory();
        expect(parameterFactory instanceof WorkflowParameterFactory).toBeTrue();
        workflowFactory = new WorkflowFactory(parameterFactory, taskBuilders, stepFactory);
        expect(workflowFactory instanceof WorkflowFactory).toBeTrue();
    });

    beforeEach(() => {
        const presenter = new Presenter()
        controller = new Controller(workflowStore, workflowFactory, presenter);
        expect(controller instanceof Controller).toBeTrue();
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

    it('should be able to run a workflow that pauses', () => {
        controller.keepFinishedWorkflows = false;
        const start = new DriverAction(null, 'start-workflow', {name: 'pause-test'});
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.pausedWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
        diary.push('executing start');
        const flowId = controller.executeAction(start);
        diary.push('executed start');
        expect(controller.activeWorkflows.size).toEqual(1);
        expect(controller.pausedWorkflows.size).toEqual(1);
        expect(controller.finishedWorkflows.size).toEqual(0);
        diary.push('executing resume');
        const resume = new DriverAction(null, 'resume-workflow', {flowId: flowId});
        diary.push('executed resume');
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.pausedWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
    });

    xit('should be able to run a workflow that pauses in keep mode', () => {
        controller.keepFinishedWorkflows = true;
        const start = new DriverAction(null, 'run-workflow', {name: 'pause-test'});
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.pausedWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
        const flowId = controller.executeAction(start);
        expect(controller.activeWorkflows.size).toEqual(1);
        expect(controller.pausedWorkflows.size).toEqual(1);
        expect(controller.finishedWorkflows.size).toEqual(0);
        const resume = new DriverAction(null, 'resume-workflow', {flowId: flowId});
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.pausedWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(1);
    });

});

