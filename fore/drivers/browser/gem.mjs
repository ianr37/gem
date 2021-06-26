
import {
        DriverAction, WorkflowFactory, WorkflowStore, WorkflowParameterFactory, WorkflowStepFactory
    } from '../../domain/index.mjs';

import { taskBuilders } from './workflow-task-builders.mjs';

import './assets/desktop.css';
import './assets/logo.png';
import definitions from './workflows.json';

const workflowStore = new WorkflowStore(definitions);
const parameterFactory = new WorkflowParameterFactory();
const stepFactory = new WorkflowStepFactory();
const workflowFactory = new WorkflowFactory(parameterFactory, taskBuilders, stepFactory);

console.log('Gem initialised');

