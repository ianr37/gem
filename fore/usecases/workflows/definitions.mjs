
const homeWorkflow = `{
    "parameters": [],
    "tasks": [
        {"taskName": "Home", "taskClass": "DisplayHomeTask", "fields": []}
        ]
}`;

const loginWorkflow = `{
    "parameters": [
        {"name": "userName", "storageType": "string"},
        {"name": "passPhrase", "storageType": "string"}],
        {"name": "accessToken", "storageType": "string"}],
        {"name": "refreshToken", "storageType": "string"}],
        {"name": "userProfile", "storageType": "UserProfile"}
    ]
    "tasks": [
        {"taskName": "Enter User ID", "taskClass": "DisplayFormTask",
            "fields": [
                {"parameter": "userName", "label": "User Name", "displayType": "text"},
                {"parameter": "passPhrase", "label": "Pass Phrase", "displayType": "password"}
            ]
        },
        {"name": "Request Tokens", "taskClass": "TxRequestTask", "url": "/api/login",
            "parameters": [
                {"parameter": "userName", "alias": "userName"},
                {"parameter": "passPhrase", "alias": "passPhrase"},
            ]
        },
        {"name": "Receive Tokens", "taskClass": "RxResponsetask",
            "parameters": [
                {"parameter": "accessToken", "alias": "accessToken"},
                {"parameter": "refreshToken", "alias": "refreshToken"},
                {"parameter": "userProfile", "alias": "userProfile"},
            ]
        },
        {"name": "Store Tokens and Profile", "taskClass": "StoreLocallyTask",
            "parameters": [
                {"parameter": "accessToken", "alias": "accessToken"},
                {"parameter": "refreshToken", "alias": "refreshToken"},
                {"parameter": "userProfile", "alias": "userProfile"},
            ]
        }
    ]
}`;

export definitions = new Map([
    ["home", homeWorkflow],
    ["logon", loginWorkflow]
]);
