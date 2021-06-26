
import { HtmlMvcTriad } from '../../mvc-triad.mjs';
import { DesktopModel } from './model.mjs';
import { DesktopView } from './view.mjs';
import { DesktopController } from './controller.mjs'

export class HtmlDesktop extends HtmlMvcTriad {

    constructor()
    {
        super(new DesktopModel(), new DesktopView(), new DesktopController());
    }

    attach(root) {
        super.attach(root);
    }

}

