
import { DriverAction, MvcView } from '../../domain/index.mjs';

export class DesktopView extends MvcView {

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

    addNavCommand(legend, command, parameters) {
        if (this.buttons.has(legend)) {
            throw new Error(`Button ${legend} already exists`);
        }
        const button = this.root.ownerDocument.createElement('button');
        button.innerText = legend;
        button.dataset.command = command;
        for (const p in parameters) {
            button.dataset[p] = parameters[p];
        }
        this.buttons.set(legend, button);
        this.menu.appendChild(button);
    }

    removeNavCommand(legend) {
        const button = this.buttons.get(legend);
        if (button) {
            this.buttons.delete(legend);
            this.menu.removeChild(button)
        }
    }

    setFooterStatus(phrase) {
        this.footerStatus.innerText = phrase;
    }

    setFooterText(phrase) {
        this.footerText.innerText = phrase;
    }

    setHeaderText(phrase) {
        this.headerText.innerText = phrase;
    }

    setLogo(path) {
        this.logo.src = path;
    }

    build(document) {
        this.root = document.createElement('div');
        this.build_header(document);
        this.build_navbar(document);
        this.build_aside(document);
        this.build_footer(document);
        this.root.addEventListener('click', this.handleEvent.bind(this));
        return this.root;
    }

    build_header(document) {
        const header = document.createElement('header');
        this.root.appendChild(header);
        this.headerText = document.createElement('h1');
        header.appendChild(this.headerText);
    }

    build_navbar(document) {
        const navbar = document.createElement('nav');
        this.root.appendChild(navbar);
        this.logo = document.createElement('img');
        navbar.appendChild(this.logo);
        this.menu = document.createElement('menu');
        navbar.appendChild(this.menu);
    }

    build_aside(document) {
        const aside = document.createElement('aside');
        this.root.appendChild(aside);
    }

    build_footer(document) {
        const footer = document.createElement('footer');
        this.root.appendChild(footer);
        this.footerStatus = document.createElement('div');
        footer.appendChild(this.footerStatus);
        this.footerText = document.createElement('div');
        footer.appendChild(this.footerText);
    }

}