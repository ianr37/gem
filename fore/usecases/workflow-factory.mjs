
import { Workflow, WorkflowField, WorkflowTask } from '../domain/index.mjs';
import { workflowDefinitions } from './workflows/index.mjs';

/*
const wfTemplates = new Map([
    ['login', JSON.parse(`{
        "fields": [
            "username": {"text"},
            "passphrase": {"text"}
        ],
        "tasks": [
        ]
    }`)]
]);

const workflows = new Map([
    ['login', new Workflow('login',
        [new WorkflowField('userName', 'text', 'ian'),
         new WorkflowField('passPhrase', 'text', 'password')],
        [new WorkflowTask('displayForm', ['userName', 'passPhrase'])])
    ]
]);
*/

const workflows = new Map();
workflows.set('login', 1);


export class WorkflowFactory {

    constructor() {
    }

    createWorkflow(name) {
        console.log(`workflows size: ${workflows.size}`);
        const keys = workflows.keys();
        console.log(`workflow key count: ${keys.length}`);
        for (const key in workflows.keys()) {
            console.log(`workflow: ${key}`);
        }
        return JSON.stringify(workflows);
    }

}

