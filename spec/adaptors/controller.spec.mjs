
import { readFileSync } from 'fs';

import  { Controller, Presenter } from '../../fore/adapters/index.mjs';
import  { DriverAction, WorkflowFactory, WorkflowStore, WorkflowParameterFactory, WorkflowStepFactory
            } from '../../fore/domain/index.mjs';
import { JsonWorkflowStore } from '../../fore/drivers/browser/workflow-store.mjs';

import { GemRoot, taskBuilders } from '../testing/index.mjs';

describe('controller', () => {

    let controller = null;
    let gemRoot = null;
    let workflowStore = null;
    let workflowFactory = null;
    const jsonFile = './spec/testing/workflows.json';

    beforeAll(() => {
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
        gemRoot = new GemRoot(controller.executeAction);
    });

    it('should be able to run a workflow that does not pause', () => {
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.pausedWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
        const action = new DriverAction(null, 'start-workflow', {name: 'run-test'});
        const flowId = gemRoot.fakeEvent(action);
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.pausedWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
    });

    it('should be able to run a workflow that does not pause in keep mode', () => {
        controller.keepFinishedWorkflows = true;
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.pausedWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
        const action = new DriverAction(null, 'start-workflow', {name: 'run-test'});
        const flowId = gemRoot.fakeEvent(action);
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.pausedWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(1);
    });

});

