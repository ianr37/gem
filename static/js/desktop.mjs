
class GemElement extends HTMLElement {

    constructor() {
        super();
    }

}

class GemArticle extends GemElement {

    constructor() {
        super();
    }

}

class GemAside extends GemElement {

    constructor() {
        super();
    }

}

class GemBody extends HTMLBodyElement {

    constructor() {
        super();
    }

}

class GemFooter extends GemElement {

    constructor() {
        super();
    }


}

class GemHeader extends GemElement {

    constructor() {
        super();
    }

}

class GemMain extends GemElement {

    constructor() {
        super();
    }

}

class GemMenu extends HTMLMenuElement {


    constructor() {
        super();
    }

}

class GemNav extends GemElement {

    constructor() {
        super();
    }

}

class GemSection extends GemElement {

    constructor() {
        super();
    }

}

const registerGemElements = () => {
    window.customElements.define('gem-article', GemArticle, {extends: 'article'});
    window.customElements.define('gem-aside', GemAside, {extends: 'aside'});
    window.customElements.define('gem-body', GemBody, {extends: 'body'});
    window.customElements.define('gem-footer', GemFooter, {extends: 'footer'});
    window.customElements.define('gem-header', GemHeader, {extends: 'header'});
    window.customElements.define('gem-main', GemMain, {extends: 'main'});
    window.customElements.define('gem-menu', GemMenu, {extends: 'menu'});
    window.customElements.define('gem-nav', GemNav, {extends: 'nav'});
    window.customElements.define('gem-section', GemSection, {extends: 'section'});
};


export { registerGemElements };

