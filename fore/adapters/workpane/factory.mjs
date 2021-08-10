
import { WorkPane } from './pane.mjs';
import { WorkPaneController } from './controller.mjs';
import { WorkPaneModel } from './model.mjs';
import { WorkPaneView } from './view.mjs';

export class WorkpaneFactory {

    constructor() {
    }

    createWorkPane() {
        const model = this.createModel();
        const view = this.createView();
        const controller = this.createController();
        const pane = new WorkPane(model, view, controller);
        return pane;
    }

    createModel() {
        return new WorkPaneModel();
    }

    createView() {
        return new WorkPaneView();
    }

    createController() {
        return new WorkPaneController();
    }

}

