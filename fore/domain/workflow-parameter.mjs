
const storageTypeDefaults = new Map([['string', ''], ['number', 0], ['boolean', false], ['object', null] ]);

export class WorkflowParameter {

    constructor(x) {
        if (x instanceof Object) {
            if ('name' in x) {
                this.name = x.name;
            } else {
                throw new Error('Parameter name must be specified');
            }
        } else {
            throw new Error('Argument is not an object');
        }
        const storageType = x.storageType || 'string';
        if (storageTypeDefaults.has(storageType)) {
            this.storageType = storageType;
        } else {
            throw new Error('Unrecognised storage type');
        }
        const value = x.value || storageTypeDefaults.get(this.storageType);
        if (this.storageType == typeof value) {
            this.value = value;
        } else {
            throw new Error('Value has the wrong storage type');
        }
    }

}

export class WorkflowParameterFactory {

    constructor() {
    }

    createParameter(x) {
        return new WorkflowParameter(x);
    }

}
