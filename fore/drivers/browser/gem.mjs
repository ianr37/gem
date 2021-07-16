
import {
        DriverAction, WorkflowFactory, WorkflowStore, WorkflowParameterFactory, WorkflowStepFactory
    } from '../../domain/index.mjs';

import {
        Desktop, DesktopModel, DesktopView, DesktopController
    } from '../../adapters/index.mjs';

import { taskBuilders } from './workflow-task-builders.mjs';

import './assets/desktop.css';
import logo from './assets/logo.png';
import definitions from './workflows.json';

const workflowStore = new WorkflowStore(definitions);
const parameterFactory = new WorkflowParameterFactory();
const stepFactory = new WorkflowStepFactory();
const workflowFactory = new WorkflowFactory(parameterFactory, taskBuilders, stepFactory);

const model = new DesktopModel();
const view = new DesktopView();
const controller = new DesktopController();
const desktop = new Desktop(model, view, controller);

const body = document.querySelector('body');
desktop.attachTo(body);
desktop.setHeaderText('Gem');
desktop.setFooterStatus('OK');
desktop.setFooterText('\xA9 Your Name Here');
desktop.setLogo(logo);
desktop.addNavCommand('Change Status', 'set-status', '{"status": "not OK"}');

console.log('Gem initialised');

