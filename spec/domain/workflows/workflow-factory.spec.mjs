
import { readFileSync } from 'fs';

import { WorkflowFactory, WorkflowParameterFactory, WorkflowStepFactory,
         WorkflowStore, WorkflowTaskFactory } from '../../../fore/domain/index.mjs';

import { tasklets } from '../../../fore/use-cases/index.mjs';

describe('workflow factory', () => {

    const jsonFile = './fore/use-cases/workflow-definitions.json';
    
    let callback = null;
    let factory = null;
    let workflow = null;

    beforeAll(() => {
        const jsonString = readFileSync(jsonFile);
        const workflowDefinitions = JSON.parse(jsonString);
        const workflowStore = new WorkflowStore(workflowDefinitions);
        expect(workflowStore).toBeDefined();
        const parameterFactory = new WorkflowParameterFactory();
        expect(parameterFactory).toBeDefined();
        const stepFactory = new WorkflowStepFactory();
        expect(stepFactory).toBeDefined();
        const taskFactory = new WorkflowTaskFactory(tasklets);
        expect(taskFactory).toBeDefined();
        factory = new WorkflowFactory(workflowStore, parameterFactory, taskFactory, stepFactory);
        expect(factory).toBeDefined();
    });

    beforeEach(() => {
        workflow = factory.createWorkflow('wf1', callback);
    });

    it('should be able to return a workflow', () => {
        expect(workflow).toBeDefined();
        expect(workflow.parameters.size).toEqual(4);
        expect(workflow.taskTemplates.size).toEqual(2);
    });

    it('the flowId should be a number greater than zero', () => {
        expect(typeof workflow.flowId).toEqual('number');
        expect(workflow.flowId).toBeGreaterThan(0);
    });

    it('the definition should be set', () => {
        expect(workflow.definition).toBeInstanceOf(Object);
        expect(workflow.definition).toBeTruthy();
    });

    it('the factory should be set', () => {
        expect(workflow.factory).toBeInstanceOf(WorkflowFactory);
    });

    it('the name should be set', () => {
        expect(typeof workflow.name).toEqual('string');
        expect(workflow.name).toBeTruthy();
    });

    it('the currentStep should be null', () => {
        expect(workflow.currentStep).toBeNull();
    });

    it('the parameters Map should be populated', () => {
        expect(workflow.parameters).toBeInstanceOf(Map);
        expect(workflow.parameters.size).toBeGreaterThan(0);
        for (const [i, p] of workflow.parameters) {
            expect(typeof p.name).toEqual('string');
            expect(p.name).toBeTruthy();
            expect(typeof p.storage).toMatch('string|number|boolean|object');
        }
    });

    it('the taskTemplates Map should be populated', () => {
        expect(workflow.taskTemplates).toBeInstanceOf(Map);
        expect(workflow.taskTemplates.size).toBeGreaterThan(0);
        for (const [i, t] of workflow.taskTemplates) {
            expect(typeof t.name).toEqual('string');
            expect(t.name).toBeTruthy();
            expect(typeof t.builder).toEqual('function');
            expect(t.builder).toBeTruthy();
            expect(t.fields).toBeInstanceOf(Array);
            expect(t.fields.length).toBeGreaterThan(0);
            for (const f of t.fields) {
                expect(typeof f).toEqual('string');
                expect(f).toBeTruthy();
            }
        }
    });

    it('the steps Map should be populated', () => {
        expect(workflow.steps).toBeInstanceOf(Map);
        expect(workflow.steps.size).toBeGreaterThan(0);
        for (const [i, s] of workflow.steps) {
            expect(typeof s.name).toEqual('string');
            expect(s.name).toBeTruthy();
            expect(typeof s.taskName).toEqual('string');
            expect(s.taskName).toBeTruthy();
            expect(s.jumps).toBeInstanceOf(Map);
            expect(s.jumps.size).toBeGreaterThan(0);
        }
    });

});

