
import { WorkflowParameterFactory } from '../../fore/usecases/index.mjs';

describe('ParameterFactory', () => {

    let factory = null;

    beforeEach(() => {
        factory = new WorkflowParameterFactory();
        expect(factory).toBeTruthy();
    });

    it('should be able to create a parameter', () => {
        const definition = {name: 'userName', storageType: 'string'};
        const parameter = factory.createParameter(definition);
        expect(parameter).toBeTruthy();
    });

    it('should only accept an object as its parameter', () => {
        const f = () => {
            return factory.createParameter('this is not an object');
        }
        expect(f).toThrowError(Error, 'Argument is not an object');
    });

    it('should have a name parameter', () => {
        const f = () => {
            return factory.createParameter({foo: 'bar'});
        }
        expect(f).toThrowError(Error, 'Parameter name must be specified');
    });

    it('should have a default storage type', () => {
        const parameter = factory.createParameter({name: 'foo'});
        expect(parameter).toBeTruthy();
    });

    it('should string as a storage type', () => {
        const parameter = factory.createParameter({name: 'foo', storageType: 'string'});
        expect(parameter).toBeTruthy();
    });

    it('should accept number as a storage type', () => {
        const parameter = factory.createParameter({name: 'foo', storageType: 'number'});
        expect(parameter).toBeTruthy();
    });

    it('should accept boolean as a storage type', () => {
        const parameter = factory.createParameter({name: 'foo', storageType: 'boolean'});
        expect(parameter).toBeTruthy();
    });

    it('should accept object as a storage type', () => {
        const parameter = factory.createParameter({name: 'foo', storageType: 'object'});
        expect(parameter).toBeTruthy();
    });

    it('should not accept an unrecognised storage type', () => {
        const f = () => {
            return factory.createParameter({name: 'foo', storageType: 'bar'});
        }
        expect(f).toThrowError(Error, 'Unrecognised storage type');
    });

    it('should accept values matching the default storage type', () => {
        const parameter = factory.createParameter({name: 'foo', value: 'bar'});
    });

    it('should not accept an values clashing with its storage type', () => {
        const f = () => {
            return factory.createParameter({name: 'foo', storageType: 'string', value: 1});
        }
        expect(f).toThrowError(Error, 'Value has the wrong storage type');
    });

});

