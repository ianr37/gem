
export class ExecutionEnvironment {

    constructor(cfg, logo, tasklets, document) {
        this.cfg = cfg.cfg;
        this.logo = logo;
        this.tasklets = tasklets;
        this.document = document;
    }

    getConfigurationValue(name) {
        const result = this.cfg[name];
        if (! result) {
            throw new Error(`Unknown configuration parameter ${name}`);
        }
        return result;
    }

    getLogo() {
        return this.logo;
    }

    getTasklets() {
        return this.tasklets;
    }

    getDocument() {
        return this.document;
    }

}

