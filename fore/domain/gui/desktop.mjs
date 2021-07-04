
import { GemNode } from './gem-node.mjs';

export class Desktop extends GemNode {

    constructor(htmlParent) {
        super(null, htmlParent);
        this.htmlElement = null;
        this.headerElement = null;
        this.navbarElement = null;
        this.mainElement = null;
        this.asideElement = null;
        this.footerElement = null;
    }

    build(document) {
        this.buildRoot(document);
        this.buildHeader(document);
        this.buildNavbar(document);
        this.buildMain(document);
        this.buildAside(document);
        this.buildFooter(document);
    }

    buildRoot(document) {
        this.htmlElement = document.createElement('div');
        this.htmlParent.appendChild(this.htmlElement);
    }

    buildHeader(document) {
        this.headerElement = document.createElement('header');
        this.htmlElement.appendChild(this.headerElement);
        const h1 = document.createElement('h1');
        h1.innerText = 'Gem';
        this.headerElement.appendChild(h1);
        this.htmlElement.appendChild(this.headerElement);
    }

    buildNavbar(document) {
        this.navbarElement = document.createElement('navbar');
        this.htmlElement.appendChild(this.navbarElement);
        const img = document.createElement('img');
        this.navbarElement.appendChild(img);
        const navbarMenu = document.createElement('menu');
        this.navbarElement.appendChild(navbarMenu);
    }

    buildMain(document) {
        this.mainElement = document.createElement('main');
        this.htmlElement.appendChild(this.mainElement);
    }

    buildAside(document) {
        this.asideElement = document.createElement('aside');
        this.htmlElement.appendChild(this.asideElement);
    }

    buildFooter(document) {
        this.footerElement = document.createElement('footer');
        this.htmlElement.appendChild(this.footerElement);
        const span = document.createElement('span');
        span.innerText = '\xA9 Your Name Here';
        this.footerElement.appendChild(span);
    }

}

