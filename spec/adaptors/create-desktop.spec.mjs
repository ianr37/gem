
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

    it('should exist', () => {
        expect(desktop).toBeInstanceOf(Desktop);
    });

    it('should have a div as the root', () => {
        const root = desktop.view.root;
        expect(root.tagName).toEqual('div');
    });

    it('should be attached to the DOM', () => {
        const root = desktop.view.root;
        expect(root.parent.tagName).toEqual('body');
    });

    it('should be able to set the header', () => {
        const phrase = 'Mary had a little lamb';
        desktop.setHeaderText(phrase);
        const headerText = desktop.view.headerText;
        expect(headerText.innerText).toEqual(phrase);
    });

    it('should be able to set the footer', () => {
        const phrase = 'Mary had a little lamb';
        desktop.setFooterText(phrase);
        const footerText = desktop.view.footerText;
        expect(footerText.innerText).toEqual(phrase);
    });

    it('should be able to set the logo', () => {
        const path = '/logo.png';
        desktop.setLogo(path);
        const img = desktop.view.logo;
        expect(img.src).toEqual(path);
    });

});

