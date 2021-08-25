
import { Workpane } from './triad.mjs';
import { WorkpaneController } from './controller.mjs';
import { WorkpaneModel } from './model.mjs';
import { WorkpaneView } from './view.mjs';

export function createWorkpane(desktop) {
    const model = new WorkpaneModel();
    const view = new WorkpaneView();
    const controller = new WorkpaneController();
    return new Workpane(desktop, model, view, controller);
}

