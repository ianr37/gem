
import { WorkflowStore } from '../../domain/workflows.mjs';

const homeWorkflow = `{
    "parameters": [],
    "tasks": [
        {"taskName": "Home", "taskClass": "BrowserDisplayTask", "fields": []}
    ]
}`;

const loginWorkflow = `{
    "parameters": [
        {"name": "userName", "storageType": "string"},
        {"name": "passPhrase", "storageType": "string"},
        {"name": "accessToken", "storageType": "string"},
        {"name": "refreshToken", "storageType": "string"},
        {"name": "userProfile", "storageType": "UserProfile"}
    ],
    "tasks": [
        {"taskName": "Enter User ID", "taskClass": "BrowserDisplayTask",
            "fields": [
                {"parameter": "userName", "label": "User Name", "displayType": "text"},
                {"parameter": "passPhrase", "label": "Pass Phrase", "displayType": "password"}
            ]
        },
        {"name": "Request Tokens", "taskClass": "BrowserTxRequestTask", "url": "/api/login",
            "parameters": [
                {"parameter": "userName", "alias": "userName"},
                {"parameter": "passPhrase", "alias": "passPhrase"}
            ]
        },
        {"name": "Receive Tokens", "taskClass": "BrowserRxResponsetask",
            "parameters": [
                {"parameter": "accessToken", "alias": "accessToken"},
                {"parameter": "refreshToken", "alias": "refreshToken"},
                {"parameter": "userProfile", "alias": "userProfile"}
            ]
        },
        {"name": "Store Tokens and Profile", "taskClass": "BrowserStoreTask",
            "parameters": [
                {"parameter": "accessToken", "alias": "accessToken"},
                {"parameter": "refreshToken", "alias": "refreshToken"},
                {"parameter": "userProfile", "alias": "userProfile"}
            ]
        }
    ]
}`;

export class SimpleWorkflowStore extends WorkflowStore {

    constructor() {
        super();
        this.addDefinition('home', homeWorkflow);
        this.addDefinition('login', loginWorkflow);
    }

}
