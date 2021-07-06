
import { Desktop } from '../../fore/adapters/index.mjs';

import { HTMLDocument, HTMLBodyElement } from  '../../fore/drivers/testing/browser/index.mjs';

describe('desktop', () => {

    const document = new HTMLDocument();
    let desktop = null;

    beforeEach(() => {
        const bodyElement = document.createElement('body');
        expect(bodyElement).toBeInstanceOf(HTMLBodyElement);
        const body = new Body(bodyElement);
        expect(body.htmlElement).toEqual(bodyElement);
        expect(body.htmlElement.ownerDocument).toBeInstanceOf(HTMLDocument);
        expect(body).toBeInstanceOf(Body);
        desktop = new Desktop(body);
    });

    xit('should exist', () => {
        expect(desktop).toBeInstanceOf(Desktop);
    });

});

