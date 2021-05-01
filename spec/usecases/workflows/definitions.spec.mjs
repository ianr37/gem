
import { getDefinition } from '../../../fore/usecases/workflows/definitions.mjs';

describe('usecases', () => {

    it('should be able to return a definition', () => {
        const definition = getDefinition('home');
        expect(definition).toBeDefined();
    });

    it('should not find a non-existant definition', () => {
        const definition = getDefinition('does not exist');
        expect(definition).toBeNull();
    });

});

