
import { WorkflowFactory, WorkflowParameterFactory } from '../../domain/index.mjs';
import { Controller, Presenter } from '../../adapters/index.mjs';

import { BrowserWorkflowTaskFactory } from './workflow-task-factory.mjs';
import { GemRoot } from './components/index.mjs';
import { SimpleWorkflowStore } from './simple-workflow-store.mjs';
import * as tasks from './tasks/index.mjs';


import './assets/desktop.css';
import './assets/logo.png';

window.customElements.define('gem-root', GemRoot, {extends: 'div'});
const root = document.createElement('div', {is: 'gem-root'});
document.body.appendChild(root);

const presenter = new Presenter(root);
const controller = new Controller(presenter);
root.controller = controller;

const store = new SimpleWorkflowStore();
const parameterFactory = new WorkflowParameterFactory();
const taskFactory = new BrowserWorkflowTaskFactory();
const wfFactory = new WorkflowFactory(store, parameterFactory, taskFactory);
const login = wfFactory.createWorkflow('login');
console.log(`login: ${login}`);

