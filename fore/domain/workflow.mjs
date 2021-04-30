
export class Workflow {

    constructor(name) {
        this.name = name;
        this.step = 0;
        this.parameters = new Map();
        this.tasks = new Array();
    }

}

