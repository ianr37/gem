
import { Controller, Presenter } from '../../adapters/index.mjs';
import {
        DriverAction, WorkflowFactory, WorkflowStore, WorkflowParameterFactory, WorkflowStepFactory
    } from '../../domain/index.mjs';
import { taskBuilders } from './workflow-task-builders.mjs';
import { DesktopV1 } from './components/index.mjs';

import './assets/desktop.css';
import './assets/logo.png';
import definitions from './workflows.json';

const workflowStore = new WorkflowStore(definitions);
const parameterFactory = new WorkflowParameterFactory();
const stepFactory = new WorkflowStepFactory();
const workflowFactory = new WorkflowFactory(parameterFactory, taskBuilders, stepFactory);
const controller = new Controller(workflowStore, workflowFactory);

window.customElements.define('gem-root', DesktopV1, {extends: 'div'});
const root = document.createElement('div', {is: 'gem-root'});
root.controllerCallback = controller.executeAction;
document.body.appendChild(root);

console.log('Gem initialised');

