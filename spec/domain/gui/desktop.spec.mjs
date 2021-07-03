
import { Desktop } from '../../../fore/domain/index.mjs';

import { HTMLDocument } from  '../../../fore/drivers/testing/browser/index.mjs';

describe('desktop', () => {

    const document = new HTMLDocument();
    let desktop = null;

    beforeEach(() => {
        const body = document.createElement('body');
        desktop = new Desktop(body);
    });

    it('should exist', () => {
        expect(desktop).toBeInstanceOf(Desktop);
    });

});

