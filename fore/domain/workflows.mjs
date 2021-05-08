
export class Workflow {

    constructor(name, presenter) {
        this.flowId = Math.random() * 2**64;
        this.name = name;
        this.presenter = presenter;
        this.step = 0;
        this.parameters = new Map();
        this.tasks = new Array();
    }

    executeAction(action) {
        /*
        - update parameters
        - determine next step from action.action
        */
    }

    start(presenter) {
    }

}

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

export class WorkflowTask {

    constructor(name, workflowId) {
        this.taskId = Math.random() * 2**64;
        this.name = name;
        this.flowId = workflowId;
    }

    execute(workflow) {
        throw Error('execute method not yet implemented');
    }

}

export class WorkflowStore {

    constructor () {
        this.definitions = new Map();
    }

    addDefinition(name, jsonString) {
        const definition = JSON.parse(jsonString);
        this.definitions.set(name, definition);
    }

    getDefinition(name) {
        return this.definitions.get(name) || null;
    }
}

