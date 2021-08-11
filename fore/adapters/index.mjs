
import {
    WorkflowFactory, WorkflowParameterFactory, WorkflowStepFactory, WorkflowStore, WorkflowTaskFactory 
} from '../domain/index.mjs';

import {
    Desktop, DesktopController, DesktopModel, DesktopView
} from './desktop/index.mjs';

export function createDesktop(workflowDefinitions, taskBuilders) {
    const model = new DesktopModel();
    const view = new DesktopView();
    const workflowStore = new WorkflowStore(workflowDefinitions);
    const parameterFactory = new WorkflowParameterFactory();
    const taskFactory = new WorkflowTaskFactory(taskBuilders);
    const stepFactory = new WorkflowStepFactory();
    const workflowFactory = new WorkflowFactory(parameterFactory, taskFactory, stepFactory);
    const controller = new DesktopController(workflowStore, workflowFactory);
    return new Desktop(model, view, controller);
}

