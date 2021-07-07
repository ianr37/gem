
import { MvcView } from '../domain/index.mjs';

export class DesktopView extends MvcView {

    constructor() {
        super();
    }

    build(document) {
        this.root = document.createElement('div');
        return this.root;
    }

}
