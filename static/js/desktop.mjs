
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
        const onclickListener = (event) => {
            const target = event.target.innerText;
            switch (event.eventPhase) {
                case Event.CAPTURING_PHASE:
                    console.log(`body: capturing ${target}`);
                    break;
                case Event.AT_TARGET:
                    console.log(`body: at target ${target}`);
                    break;
                case Event.BUBBLING_PHASE:
                    console.log(`body: bubbling ${target}`);
                    break;
                default:
                    console.log(`body: default ${target}`);
                    break;
            };
        };
        addEventListener('click', onclickListener, {capture: false});
    }

}

class GemButton extends HTMLButtonElement {

    constructor() {
        super();
        const onclickListener = (event) => {
            const target = event.target.innerText;
            const me = this.innerText;
            if (event.target === this) {
                switch (event.eventPhase) {
                    case Event.CAPTURING_PHASE:
                        console.log(`button ${me}: capturing ${target}`);
                        break;
                    case Event.AT_TARGET:
                        console.log(`button ${me}: at target ${target}`);
                        break;
                    case Event.BUBBLING_PHASE:
                        console.log(`button ${me}: bubbling ${target}`);
                        break;
                    default:
                        console.log(`button ${me}: default ${target}`);
                        break;
                }
            } else {
                console.log(`button ${me}: I'm not ${target}`);
            }

        };
        addEventListener('click', onclickListener, {capture: false});
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
    window.customElements.define('gem-button', GemButton, {extends: 'button'});
    window.customElements.define('gem-footer', GemFooter, {extends: 'footer'});
    window.customElements.define('gem-header', GemHeader, {extends: 'header'});
    window.customElements.define('gem-main', GemMain, {extends: 'main'});
    window.customElements.define('gem-menu', GemMenu, {extends: 'menu'});
    window.customElements.define('gem-nav', GemNav, {extends: 'nav'});
    window.customElements.define('gem-section', GemSection, {extends: 'section'});
};


export { registerGemElements };

