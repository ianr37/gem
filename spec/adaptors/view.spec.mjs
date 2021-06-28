
import { MockMvcView } from '../../fore/drivers/testing/adapters/index.mjs';

describe('view', () => {

    let view = null;

    beforeEach(() => {
        view = new MockMvcView();
    });

    it('should be able to create a view', () => {
        expect(view).toBeInstanceOf(MockMvcView);
    });

});

