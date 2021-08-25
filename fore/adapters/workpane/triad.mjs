
import { MvcTriad } from '../../domain/index.mjs';

export class Workpane extends MvcTriad {

    constructor(desktop, model, view, controller) {
        super(model, view, controller);
        this.desktop = desktop;
        const document = desktop.getDocument();
        const viewRoot = view.build(document);
    }

}

