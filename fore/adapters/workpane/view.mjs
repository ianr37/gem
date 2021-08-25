
import { DriverAction, MvcView } from '../../domain/index.mjs';

export class WorkpaneView extends MvcView {

    constructor() {
        super();
        this.buttons = new Map();
    }

    handleEvent(event) {
        const dataset = event.target.dataset;
        if ('command' in dataset) {
            const action = new DriverAction(dataset.command, dataset);
            this.controller.handleAction(action);
        }
    }

    build(document) {
        this.root = document.createElement('main');
        this.buildMenu(document);
        this.buildArticle(document);
        this.root.addEventListener('click', this.handleEvent.bind(this));
        return this.root;
    };

    buildMenu(document) {
        this.menu = document.createElement('menu');
        this.root.appendChild(this.menu);
    };

    buildArticle(document) {
        this.article = document.createElement('article');
        this.root.appendChild(this.article);
    };
}

