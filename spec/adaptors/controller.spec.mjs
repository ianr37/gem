
import  { Controller, Presenter } from '../../fore/adapters/index.mjs';
import  { DriverAction, WorkflowFactory, WorkflowStore, WorkflowParameterFactory, WorkflowTaskFactory
            } from '../../fore/domain/index.mjs';
import { JsonWorkflowStore } from '../../fore/drivers/node/workflow-store.mjs';

import {TestTaskFactory } from '../testing/task-factory.mjs';

describe('controller', () => {

    let controller = null;
    let workflowFactory = null;

    beforeAll(() => {
        const store = new JsonWorkflowStore('./spec/testing/controller-test.json');
        expect(store instanceof WorkflowStore).toBeTrue();
        const taskFactory = new TestTaskFactory();
        expect(taskFactory instanceof WorkflowTaskFactory).toBeTrue();
        const parameterFactory = new WorkflowParameterFactory();
        expect(parameterFactory instanceof WorkflowParameterFactory).toBeTrue();
        workflowFactory = new WorkflowFactory(store, parameterFactory, taskFactory);
        expect(workflowFactory instanceof WorkflowFactory).toBeTrue();
    });

    beforeEach(() => {
        const presenter = new Presenter()
        controller = new Controller(workflowFactory, presenter);
        expect(controller instanceof Controller).toBeTrue();
    });

    it('should be able to run a workflow that does not pause', () => {
        const action = new DriverAction(null, 'run-workflow', {name: 'run-test'});
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
        controller.executeAction(action);
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
    });

    it('should be able to run a workflow that does not pause in keep mode', () => {
        controller.keepFinishedWorkflows = true;
        const action = new DriverAction(null, 'run-workflow', {name: 'run-test'});
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
        controller.executeAction(action);
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(1);
    });

    it('should be able to run a workflow that pauses', () => {
        controller.keepFinishedWorkflows = false;
        const action = new DriverAction(null, 'run-workflow', {name: 'pause-test'});
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
        controller.executeAction(action);
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
    });

    it('should be able to run a workflow that pauses in keep mode', () => {
        controller.keepFinishedWorkflows = true;
        const action = new DriverAction(null, 'run-workflow', {name: 'pause-test'});
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
        controller.executeAction(action);
        expect(controller.activeWorkflows.size).toEqual(0);
        expect(controller.finishedWorkflows.size).toEqual(0);
    });

});

