
import { MvcTriad } from '../domain/index.mjs';

export class Desktop extends MvcTriad {

    constructor(model, view, controller) {
        super(model, view, controller);
    }

    setFooterStatus(phrase) {
        this.view.setFooterStatus(phrase);
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

    addNavCommand(legend, command, parameters) {
        this.view.addNavCommand(legend, command, parameters);
    }

    removeNavCommand(legend) {
        this.view.removeNavCommand(legend);
    }

}

