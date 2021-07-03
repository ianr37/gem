
import {
        DriverAction, WorkflowFactory, WorkflowStore, WorkflowParameterFactory, WorkflowStepFactory,
        Body, Desktop
    } from '../../domain/index.mjs';

import { taskBuilders } from './workflow-task-builders.mjs';

import './assets/desktop.css';
import './assets/logo.png';
import definitions from './workflows.json';

const workflowStore = new WorkflowStore(definitions);
const parameterFactory = new WorkflowParameterFactory();
const stepFactory = new WorkflowStepFactory();
const workflowFactory = new WorkflowFactory(parameterFactory, taskBuilders, stepFactory);

const body = document.querySelector('body');
const desktop = new Desktop(body);

console.log('Gem initialised');

