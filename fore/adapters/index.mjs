
import {
    WorkflowFactory, WorkflowParameterFactory, WorkflowStepFactory, WorkflowStore
} from '../domain/index.mjs';

import {
    Desktop, DesktopController, DesktopModel, DesktopView
} from './desktop/index.mjs';

export function createDesktop(workflowDefinitions, taskBuilders) {
    const model = new DesktopModel();
    const view = new DesktopView();
    const workflowStore = new WorkflowStore(workflowDefinitions);
    const stepFactory = new WorkflowStepFactory();
    const parameterFactory = new WorkflowParameterFactory();
    const workflowFactory = new WorkflowFactory(parameterFactory, taskBuilders, stepFactory);
    const controller = new DesktopController(workflowStore, workflowFactory);
    return new Desktop(model, view, controller);
}

