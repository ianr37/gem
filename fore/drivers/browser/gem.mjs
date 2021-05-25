
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

const store = new JsonWorkflowStore('./workflows.json');
const parameterFactory = new WorkflowParameterFactory();
const stepFactory = new WorkflowStepFactory();
const wfFactory = new WorkflowFactory(parameterFactory, taskBuilders, stepFactory);

const presenter = new Presenter(root);

const controller = new Controller(workflowFactory, presenter);
root.controller = controller;

controller.executeAction(new DriverAction(null, 'run-workflow', {name: 'home'}));

