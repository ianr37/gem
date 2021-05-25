
const storageDefaults = new Map([['string', ''], ['number', 0], ['boolean', false], ['object', null] ]);

export class WorkflowParameter {

    constructor(definition) {
        if (definition instanceof Object) {
            if ('name' in definition) {
                this.name = definition.name;
            } else {
                throw new Error('Parameter name must be specified');
            }
        } else {
            throw new Error('Argument is not an object');
        }
        const storage = definition.storage || 'string';
        if (storageDefaults.has(storage)) {
            this.storage = storage;
        } else {
            throw new Error('Unrecognised storage type');
        }
        const value = definition.value || storageDefaults.get(this.storage);
        if (this.storage == typeof value) {
            this.value = value;
        } else {
            throw new Error('Value has the wrong storage type');
        }
    }

}

export class WorkflowParameterFactory {

    createParameter(definition) {
        return new WorkflowParameter(definition);
    }

}
