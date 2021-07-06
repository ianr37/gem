
import { Body } from '../../../fore/domain/gui/body.mjs';

import { HTMLDocument, HTMLBodyElement } from  '../../../fore/drivers/testing/browser/index.mjs';

describe('body node', () => {

    const document = new HTMLDocument();
    let body = null;

    beforeEach(() => {
        const element = document.createElement('body');
        body = new Body(element);
    });

    it('should exist', () => {
        expect(body).toBeInstanceOf(Body);
    });

    it('should be linked to a <body>', () => {
        expect(body.htmlElement).toBeInstanceOf(HTMLBodyElement);
    });

    it('should be linked to the owning document', () => {
        const doc = body.htmlElement.ownerDocument;
        expect(doc).toEqual(document);
    });

});
