
export class Desktop {

    constructor(parent, htmlParent) {
        const document = parent.htmlparent.ownerDocument;
        this.htmlElement = document.createElement('div');
        /*super(parent, htmlParent, htmlElement);*/
        this.build();
    }

    build() {
        const document = this.htmlElement.ownerDocument;
        this.headerElement = null;
        this.navbarElement = null;
        this.mainElement = null;
        this.asideElement = null;
        this.footerElement = null;
        this.buildHeader(document);
        this.buildNavbar(document);
        this.buildMain(document);
        this.buildAside(document);
        this.buildFooter(document);
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

