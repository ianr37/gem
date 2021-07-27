
import { DriverAction, MvcView } from '../../domain/index.mjs';

export class WorkflowPaneView extends MvcView {

    constructor() {
        super();
        this.buttons = new Map();
    }

    handleEvent(event) {
        const dataset = event.target.dataset;
        if (dataset) {
            const action = new DriverAction(dataset.command, dataset);
            this.controller.handleAction(action);
        } else {
            console.log('no dataset on target');
        }
    }

    build(document) {
        const elements = [];
        this.menu_bar = this.build_menubar(document);
        this.article = this.build_article(document);
        this.root.addEventListener('click', this.handleEvent.bind(this));
        return [this.menu_bar, this.article];
    }

    build_menubar(document) {
    }

    build_article(document) {
    }

}

