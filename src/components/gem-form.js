
class GemForm extends HTMLFormElement {

    constructor() {
        super();
        const onSubmitListener = (event) => {
            console.log(`GemForm: onSubmit triggered`);
            event.stopPropagation();
        };
        addEventListener('submit', onSubmitListener);
    }

}

