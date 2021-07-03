
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

    build() {
        const document = this.htmlParent.ownerDocument;
        this.htmlElement = document.createElement('div');
        this.htmlParent.appendChild(this.htmlElement);
        this.headerElement = document.createElement('header');
        this.htmlElement.appendChild(this.headerElement);
        const h1 = document.createElement('h1');
        h1.innerText = 'Gem';
        this.headerElement.appendChild(h1);
        this.htmlElement.appendChild(this.headerElement);
        this.navbarElement = document.createElement('navbar');
        this.htmlElement.appendChild(this.navbarElement);
        this.mainElement = document.createElement('main');
        this.htmlElement.appendChild(this.mainElement);
        this.asideElement = document.createElement('aside');
        this.htmlElement.appendChild(this.asideElement);
        this.footerElement = document.createElement('footer');
        this.htmlElement.appendChild(this.footerElement);
        const span = document.createElement('span');
        span.innerText = '&#169; Your Name Here';
        this.headerElement.appendChild(span);
    }

}

