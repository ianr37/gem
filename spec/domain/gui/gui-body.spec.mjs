
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
        expect(body.children.size).toBe(0);
        const button = new MockButton();
        body.addChild('sole', button);
        expect(body.children.size).toBe(1);
    });

});
