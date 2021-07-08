
import { MvcView } from '../domain/index.mjs';

export class DesktopView extends MvcView {

    constructor() {
        super();
    }

    build(document) {
        this.root = document.createElement('div');
        const header = document.createElement('header');
        this.root.appendChild(header);
        this.headerText = document.createElement('h1');
        header.appendChild(this.headerText);
        this.headerText.innerText = 'Gem';
        const footer = document.createElement('footer');
        this.root.appendChild(footer);
        this.footerText = document.createElement('span');
        footer.appendChild(this.footerText);
        this.footerText.innerText = '\xA9 Your Name Here';
        return this.root;
    }

    setHeaderText(phrase) {
        this.headerText.innerText = phrase;
    }

    setFooterText(phrase) {
        this.footerText.innerText = phrase;
    }

}
