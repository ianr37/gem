
class GemElement extends HTMLElement {

    constructor() {
        super();
    }

}

class GemArticle extends GemElement {

    constructor() {
        super();
        console.log('GemArticle constructor called');
    }

}

class GemAside extends GemElement {

    constructor() {
        super();
        console.log('GemAside constructor called');
    }

}

class GemBody extends HTMLBodyElement {

    constructor() {
        super();
        console.log('GemBody constructor called');
    }

}

class GemFooter extends GemElement {

    constructor() {
        super();
        console.log('GemFooter constructor called');
    }

}

class GemHeader extends GemElement {

    constructor() {
        super();
        console.log('GemHeader constructor called');
    }

}

class GemMain extends GemElement {

    constructor() {
        super();
        console.log('GemMain constructor called');
    }

}

class GemMenu extends HTMLMenuElement {

    constructor() {
        super();
        console.log('GemMenu constructor called');
    }

}

class GemNav extends GemElement {

    constructor() {
        super();
        console.log('GemNav constructor called');
    }

}

class GemSection extends GemElement {

    constructor() {
        super();
        console.log('GemSection constructor called');
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

