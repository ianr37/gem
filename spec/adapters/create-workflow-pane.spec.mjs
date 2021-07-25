
import { HTMLDocument } from  '../../fore/drivers/testing/html/index.mjs';

describe('the workflow pane', () => {

    let pane = null;

    beforeEach(() => {
        const model = new WorkflowPaneModel();
        const view = new WorkflowPaneView();
        const controller = new WorkflowPaneController();
        pane = new WorkflowPane(model, view, controller);
        throw new Error('create Desktop and call its pushWorkflowPane method');
    });
    
    xit('should exist', () => {
        /*
        **  TODO: Fix the attachment problem.
        */
        expect(pane).toBeInstanceOf(WorkflowPane);
    });

});
