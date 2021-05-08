
import  { Controller } from '../../fore/adapters/index.mjs';
import  { DriverAction } from '../../fore/domain/index.mjs';

describe('adapters', () => {

    let controller = null;

    beforeEach(() => {
        controller = new Controller();
        expect(controller instanceof Controller).toBeTrue();
    });

});

