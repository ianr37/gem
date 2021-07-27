
import {
    WorkflowFactory, WorkflowParameterFactory, WorkflowStepFactory, WorkflowStore
} from '../domain/index.mjs';

import { Desktop } from './desktop.mjs';
import { DesktopController } from './desktop-controller.mjs';
import { DesktopModel } from './desktop-model.mjs';
import { DesktopView } from './desktop-view.mjs';

export class DesktopFactory {

    constructor(workflowDefinitions, taskBuilders) {
        this.workflowDefinitions = workflowDefinitions;
        this.taskBuilders = taskBuilders;
    }

    createDesktop() {
        const model = this.createModel();
        const view = this.createView();
        const controller = this.createController();
        const desktop = new Desktop(model, view, controller);
        return desktop;
    }

    createModel() {
        return new DesktopModel();
    }

    createView() {
        return new DesktopView();
    }

    createController() {
        const workflowStore = new WorkflowStore(this.workflowDefinitions);
        const stepFactory = new WorkflowStepFactory();
        const parameterFactory = new WorkflowParameterFactory();
        const workflowFactory = new WorkflowFactory(parameterFactory, this.taskBuilders, stepFactory);
        return new DesktopController(workflowStore, workflowFactory);
    }

}

