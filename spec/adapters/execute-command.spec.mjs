
import { Desktop, DesktopModel, DesktopView, DesktopController } from '../../fore/adapters/index.mjs';

import { HTMLDocument } from  '../../fore/drivers/testing/html/index.mjs';

describe('the desktop', () => {

    let desktop = null;

    beforeEach(() => {
        const model = new DesktopModel();
        const view = new DesktopView();
        const controller = new DesktopController();
        desktop = new Desktop(model, view, controller);
        const document = new HTMLDocument();
        const body = document.createElement('body');
        desktop.attachTo(body);
    });

    it('should be able execute a command by clicking on a menu button', () => {
        const legend = 'Change Status';
        const command = 'set-status';
        const parameters = {status: "test succeeded"};
        desktop.addNavCommand(legend, command, parameters);
        const button = desktop.view.buttons.get(legend);
        button.click();
        const status = desktop.view.footerStatus.innerText;
        expect(status).toBe('test succeeded');
    });

});

