
import { WorkflowFactory, WorkflowParameterFactory } from '../../domain/index.mjs';
import { Controller, Presenter } from '../../adapters/index.mjs';

import { JsonWorkflowStore } from './workflow-store.mjs';
import { BrowserWorkflowTaskFactory } from './workflow-task-factory.mjs';
import { GemRoot } from './components/index.mjs';
import * as tasks from './tasks/index.mjs';

import './assets/desktop.css';
import './assets/logo.png';

window.customElements.define('gem-root', GemRoot, {extends: 'div'});
const root = document.createElement('div', {is: 'gem-root'});
document.body.appendChild(root);

const store = new JsonWorkflowStore('./workflows.json');
const parameterFactory = new WorkflowParameterFactory();
const taskFactory = new BrowserWorkflowTaskFactory();
const wfFactory = new WorkflowFactory(store, parameterFactory, taskFactory);

const presenter = new Presenter(root);

const controller = new Controller(workflowFactory, presenter);
root.controller = controller;

const startHomeAction = new DriverAction(null, 'start workflow', ['home']);
controller.executeAction(startHomeAction);

