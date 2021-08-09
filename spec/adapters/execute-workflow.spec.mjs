
import { readFileSync } from 'fs';

import { DriverAction } from '../../fore/domain/index.mjs';
import { createDesktop } from '../../fore/adapters/index.mjs';
import { taskBuilders } from '../../fore/use-cases/index.mjs';

import { HTMLDocument, Waiter  } from '../../fore/drivers/testing/index.mjs';

describe('controller', () => {

    let controller = null;
    let desktop = null;
    let workflowDefinitions = null;
    const diary = [];
    const jsonFile = './fore/use-cases/workflow-definitions.json';
    let waiter = null;

    beforeAll(() => {
        waiter = new Waiter();
        const jsonString = readFileSync(jsonFile);
        workflowDefinitions = JSON.parse(jsonString);
    });

    beforeEach(() => {
        desktop = createDesktop(workflowDefinitions, taskBuilders);   
        const document = new HTMLDocument();
        const body = document.createElement('body');
        desktop.attachTo(body);
        controller = desktop.controller;
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

