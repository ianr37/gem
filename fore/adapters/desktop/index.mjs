
import {
    WorkflowFactory, WorkflowParameterFactory, WorkflowStepFactory, WorkflowStore, WorkflowTaskFactory
} from '../../domain/index.mjs';

import { Desktop } from './triad.mjs';
import { DesktopController } from './controller.mjs';
import { DesktopModel } from './model.mjs';
import { DesktopView } from './view.mjs';

export function createDesktop(env) {
    const model = new DesktopModel();
    const view = new DesktopView();
    const workflowStore = new WorkflowStore(env.getConfigurationValue('workflows'));
    const parameterFactory = new WorkflowParameterFactory();
    const taskFactory = new WorkflowTaskFactory(env.getTasklets());
    const stepFactory = new WorkflowStepFactory();
    const workflowFactory = new WorkflowFactory(workflowStore, parameterFactory, taskFactory, stepFactory);
    const controller = new DesktopController(workflowFactory);
    return new Desktop(env, model, view, controller);
}

