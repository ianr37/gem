
import { WorkflowPane } from './pane.mjs';
import { WorkflowPaneController } from './controller.mjs';
import { WorkflowPaneModel } from './model.mjs';
import { WorkflowPaneView } from './view.mjs';

export class WorkflowPaneFactory {

    constructor() {
    }

    createWorkflowPane() {
        const model = this.createModel();
        const view = this.createView();
        const controller = this.createController();
        const pane = new WorkflowPane(model, view, controller);
        return pane;
    }

    createModel() {
        return new WorkflowPaneModel();
    }

    createView() {
        return new WorkflowPaneView();
    }

    createController() {
        return new WorkflowPaneController();
    }

}

