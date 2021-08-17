
import { MvcTriad } from '../../domain/index.mjs';

export class Desktop extends MvcTriad {

    constructor(env, model, view, controller) {
        super(model, view, controller);
        this.environment = env;
        const viewRoot = this.view.build(env.document);
        env.parent.appendChild(viewRoot);
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

