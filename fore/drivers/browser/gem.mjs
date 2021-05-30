
import 'fs';

import { WorkflowFactory, WorkflowParameterFactory, WorkflowStepfactory } from '../../domain/index.mjs';
import { Controller, Presenter } from '../../adapters/index.mjs';

import { JsonWorkflowStore } from './workflow-store.mjs';
import { taskBuilders } from './workflow-task-builders.mjs';
import { GemRoot } from './components/index.mjs';
import * as tasks from './tasks/index.mjs';

import './assets/desktop.css';
import './assets/logo.png';

window.customElements.define('gem-root', GemRoot, {extends: 'div'});
const root = document.createElement('div', {is: 'gem-root'});
document.body.appendChild(root);

const jsonString = fs.readFileSync('./workflows.json');
workflowStore = new JsonWorkflowStore(jsonString);
const parameterFactory = new WorkflowParameterFactory();
const stepFactory = new WorkflowStepFactory();
const workflowFactory = new WorkflowFactory(parameterFactory, taskBuilders, stepFactory);

const controller = new Controller(workflowStore, workflowFactory);
root.controller = controller;

const presenter = new Presenter(controller, root);


controller.executeAction(new DriverAction(null, 'run-workflow', {name: 'home'}));

