
class GemBody extends HTMLBodyElement {

    constructor() {
        super();
        const onSubmitListener = (event) => {
            console.log(`Body: onSubmit triggered`);
        };
        addEventListener('submit', onSubmitListener);
    }

}

