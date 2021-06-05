
import { WorkflowFactory, WorkflowParameterFactory, WorkflowStepfactory } from '../../domain/index.mjs';
import { Controller, Presenter } from '../../adapters/index.mjs';

import { JsonWorkflowStore } from './workflow-store.mjs';
import { taskBuilders } from './workflow-task-builders.mjs';
import { GemRoot } from './components/index.mjs';
import * as tasks from './tasks/index.mjs';

import './assets/desktop.css';
import './assets/logo.png';
import definitions from './workflows.json';

/*NOTE: next line may not work, webpack magically parses the JSON*/
workflowStore = new JsonWorkflowStore(definitions);
const parameterFactory = new WorkflowParameterFactory();
const stepFactory = new WorkflowStepFactory();
const workflowFactory = new WorkflowFactory(parameterFactory, taskBuilders, stepFactory);
const controller = new Controller(workflowStore, workflowFactory);

window.customElements.define('gem-root', GemRoot, {extends: 'div'});
const root = document.createElement('div', {is: 'gem-root'});
root.controllerCallback = controller.executeAction;
document.body.appendChild(root);

controller.presenter = new Presenter(root);


controller.executeAction(new DriverAction(null, 'run-workflow', {name: 'home'}));

