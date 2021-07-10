
import { MvcView } from '../domain/index.mjs';

export class DesktopView extends MvcView {

    constructor() {
        super();
    }

    build(document) {
        this.root = document.createElement('div');
        this.build_header(document);
        this.build_footer(document);
        this.build_navbar(document);
        return this.root;
    }

    build_header(document) {
        const header = document.createElement('header');
        this.root.appendChild(header);
        this.headerText = document.createElement('h1');
        header.appendChild(this.headerText);
    }

    build_footer(document) {
        const footer = document.createElement('footer');
        this.root.appendChild(footer);
        this.footerText = document.createElement('span');
        footer.appendChild(this.footerText);
    }

    build_navbar(document) {
        const navbar = document.createElement('nav');
        this.root.appendChild(navbar);
        this.logo = document.createElement('img');
        navbar.appendChild(this.logo);
        this.menu = document.createElement('menu');
        navbar.appendChild(this.menu);
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

}
