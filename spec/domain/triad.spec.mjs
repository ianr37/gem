
import { MvcController, MvcModel, MvcTriad, MvcView } from '../../fore/domain/index.mjs';

describe('view', () => {

    let triad = null;

    beforeEach(() => {
        const model = new MvcModel();
        const view = new MvcView();
        const controller = new MvcController();
        triad = new MvcTriad(model, view, controller);
    });

    it('should be able to create a triad', () => {
        expect(triad).toBeInstanceOf(MvcTriad);
    });

    it('should be able to create a triad with a model', () => {
        expect(triad.model).toBeInstanceOf(MvcModel);
    });

    it('should be able to create a triad with a view', () => {
        expect(triad.view).toBeInstanceOf(MvcView);
    });

    it('should be able to create a triad with a controller', () => {
        expect(triad.controller).toBeInstanceOf(MvcController);
    });

    it('should have connected the model to the view', () => {
        expect(triad.view.model).toEqual(triad.model);
    });

    it('should have connected the model to the controller', () => {
        expect(triad.controller.model).toEqual(triad.model);
    });

    it('should have connected the view to the controller', () => {
        expect(triad.controller.view).toEqual(triad.view);
    });

    it('should have connected the controller to the view', () => {
        expect(triad.view.controller).toEqual(triad.controller);
    });

});

