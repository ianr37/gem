
export class Configuration {

    constructor(rawConfiguration) {
        this.cfg = rawConfiguration;
    }

    getHeaderText() {
        const headerText = this.cfg?.headerText;
        if (! headerText) {
            throw new Error('Configuration: header text missing');
        }
        return headerText;
    }

    getFooterText() {
        const footerText = this.cfg?.footerText;
        if (! footerText) {
            throw new Error('Configuration: footer text missing');
        }
        return footerText;
    }

    getWorkflows() {
        const workflows = this.cfg?.workflows;
        if (! workflows) {
            throw new Error('Configuration: workflows missing');
        }
        return workflows;
    }

}

