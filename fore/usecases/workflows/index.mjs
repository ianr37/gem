
const homeWorkflow = `{
    "attributes": [],
    "tasks": [
        {"taskName": "Home", "taskClass": "DisplayHomeTask", "fields": []}
        ]
}`;

const loginWorkflow = `{
    "attributes": [
        {"name": "userName", "storageType": "string"},
        {"name": "passPhrase", "storageType": "string"}],
        {"name": "accessToken", "storageType": "string"}],
        {"name": "refreshToken", "storageType": "string"}],
        {"name": "userProfile", "storageType": "UserProfile"}
    ]
    "tasks": [
        {"taskName": "Enter User ID", "taskClass": "DisplayFormTask",
            "fields": [
                {"attribute": "userName", "label": "User Name", "displayType": "text"},
                {"attribute": "passPhrase", "label": "Pass Phrase", "displayType": "password"}
            ]
        },
        {"name": "Request Tokens", "taskClass": "TxRequestTask", "url": "/api/login",
            "parameters": [
                {"attribute": "userName", "alias": "userName"},
                {"attribute": "passPhrase", "alias": "passPhrase"},
            ]
        },
        {"name": "Receive Tokens", "taskClass": "RxResponsetask",
            "parameters": [
                {"attribute": "accessToken", "alias": "accessToken"},
                {"attribute": "refreshToken", "alias": "refreshToken"},
                {"attribute": "userProfile", "alias": "userProfile"},
            ]
        },
        {"name": "Store Tokens and Profile", "taskClass": "StoreLocallyTask",
            "parameters": [
                {"attribute": "accessToken", "alias": "accessToken"},
                {"attribute": "refreshToken", "alias": "refreshToken"},
                {"attribute": "userProfile", "alias": "userProfile"},
            ]
        }
    ]
}`;

export workflowDefinitions = new Map([
    ["home", homeWorkflow],
    ["logon", loginWorkflow]
]);
