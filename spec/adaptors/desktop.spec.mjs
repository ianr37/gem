
import { Desktop } from '../../fore/adapters/index.mjs';

import { HTMLDocument } from  '../../fore/drivers/testing/html/index.mjs';

describe('desktop', () => {

    const document = new HTMLDocument();
    let desktop = null;

    beforeEach(() => {
    });

    xit('should exist', () => {
        expect(desktop).toBeInstanceOf(Desktop);
    });

});

