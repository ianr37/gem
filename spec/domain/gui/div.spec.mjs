
import { Body, Div } from '../../../fore/domain/gui/index.mjs';

import {
        HTMLDocument, HTMLBodyElement, HTMLDivElement, HTMLElement
    } from  '../../../fore/drivers/testing/browser/index.mjs';

describe('div', () => {

    const document = new HTMLDocument();
    let body = null;
    let div = null;

    beforeEach(() => {
        const element = document.createElement('body');
        body = new Body(element);
        div = new Div(body, element);
    });

    it('should exist', () => {
        expect(div).toBeInstanceOf(Div);
    });

    it('should be linked to a <div>', () => {
        expect(div.htmlElement).toBeInstanceOf(HTMLDivElement);
    });

    it('should be linked to the owning document', () => {
        const doc = div.htmlElement.ownerDocument;
        expect(doc).toEqual(document);
    });

    xit('should have an htmlElement with a parent', () => {
        console.log(`div.htmlElement is ->${div.htmlElement}<-`);
        console.log(`div.htmlElement.parent is ->${div.htmlElement.parent}<-`);
        expect(div.htmlParent.contains(div.htmlElement)).toBeTrue();
    });

});
