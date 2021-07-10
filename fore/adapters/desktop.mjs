
import { MvcTriad } from '../domain/index.mjs';

export class Desktop extends MvcTriad {

    constructor(model, view, controller) {
        super(model, view, controller);
    }

    setFooterText(phrase) {
        this.view.setFooterText(phrase);
    }

    setHeaderText(phrase) {
        this.view.setHeaderText(phrase);
    }

    setLogo(path) {
        this.view.setLogo(path);
    }

}

