
export class Controller {

    constructor(presenter) {
        this.presenter = presenter;
    }

    executeCommand(command) {
        console.log(`controller received ->${command.name}<-`);
    }

}

