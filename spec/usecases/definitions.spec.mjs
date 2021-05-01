
import { definitions } from '../../fore/usecases/workflows/definitions.mjs';

describe('usecases', () => {

    it('should be able to return a definition', () => {
        const definition = definitions.get('home');
        expect(definition).toBeDefined();
    });

    it('should not find a non-existant definition', () => {
        const definition = definitions.get('does not exist');
        expect(definition).toBeUndefined();
    });

});

