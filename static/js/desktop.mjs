
class GemBody extends HTMLBodyElement {

    constructor() {
        super();
        console.log('GemBody constructor called');
    }

}

const registerGemElements = () => {
    window.customElements.define('gem-body', GemBody, {extends: 'body'});
};


export { registerGemElements };

