
import { Body } from '../../../fore/domain/index.mjs';

import { MockBody, MockButton } from '../../../fore/drivers/testing/domain/index.mjs';

describe('Body', () => {

    let body = null;

    beforeEach(() => {
        body = new MockBody();
    });

    it('should exist', () => {
        expect(body).toBeInstanceOf(Body);
    });

    it('should be able to attach a child node', () => {
        expect(body.children.length).toBe(0);
        const button = new MockButton();
        body.appendChild(button);
        expect(body.children.length).toBe(1);
        expect(body.children[0]).toEqual(button);
    });

});
