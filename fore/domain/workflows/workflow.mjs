
export class Workflow {

    constructor(definition, factory, actionHandler, presenter) {
        this.flowId = Math.round(Math.random() * 2**64);
        this.definition = definition;
        this.factory = factory;
        this.actionHandler = actionHandler;
        this.presenter = presenter;
        this.name = definition.name;
        this.parameters = new Map();
        this.taskTemplates = new Map();
        this.steps = new Map();
        this.log = [];
        this.currentStep = null;
    }

    addParameter(parameter) {
        this.parameters.set(parameter.name, parameter);
    }

    deleteParameter(name) {
        this.parameters.delete(name);
    }

    addStep(step) {
        this.steps.set(step.name, step);
    }

    deleteStep(name) {
        this.steps.delete(name);
    }

    _getNextStep(result) {
        let step = null;
        const nameOfNextStep = this.currentStep.jumps.get(result.status);
        if (nameOfNextStep) {
            step = this._getStep(nameOfNextStep);
        }
        return step;
    }

    _getFirstStep() {
        return this._getStep(this.definition.firstStep);
    }

    _getStep(name) {
        const step = this.steps.get(name);
        if (!step) {
            throw new Error(`Unknown step ${name}`);
        }
        return step;
    }

    addTaskTemplate(template) {
        this.taskTemplates.set(template.name, template);
    }

    deleteTaskTemplate(name) {
        this.taskTemplates.delete(name);
    }

    logStepOutcome (step, outcome) {
        this.log.push(`${step.name}: status: ${outcome.status}, rc: ${outcome.rc}, msg:  ${outcome.msg}`);
    }

    execute(previousResult) {
        let result = previousResult;
        let goon = true;
        do {
            if (result) {
                if (result.status == 'paused') {
                    goon = false;
                } else {
                    this.logStepOutcome(this.currentStep, result);
                    if (result.status == 'failed' || result.status == 'finished') {
                        goon = false;
                    } else {
                        this.currentStep = this._getNextStep(result);
                        if (!this.currentStep) {
                            goon = false;

                        }
                    }
                }
            } else {
                this.currentStep = this._getFirstStep();
            }
            if (goon) {
                result = this._runTask();
            }
        } while (goon);
        return result;
    }

    _runTask() {
        let result = null;
        try {
            const template = this.taskTemplates.get(this.currentStep.taskName);
            const task = new template.builder(this, template.name, template.fields);
            /* TTD Pass the task a dictionary of workflow parameters keyed on the names it's expecting*/
            result = task.run();
        } catch(ex) {
            result = {status: 'failed', rc: 0, msg: ex.message}
        }
        return result;
    }

}

