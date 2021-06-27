
import { MockGuiNode, MockMvcView } from '../support/index.mjs';

describe('view', () => {

    let node = null;
    let view = null;

    beforeEach(() => {
        node = new MockGuiNode();
        view = new MockMvcView();
    });

    it('should be able to create a view', () => {
        expect(view).toBeInstanceOf(MockMvcView);
    });

    it('should be able to attach to a GUI node', () => {
        expect(view.root).toBeNull();
        view.attach(node);
        expect(view.root).toEqual(node);
    });

});

