
import { DriverAction } from '../../domain/index.mjs';

import { DesktopFactory } from '../../adapters/index.mjs';

import { taskBuilders } from './workflow-task-builders.mjs';

import './assets/desktop.css';
import logo from './assets/logo.png';
import workflowDefinitions from './workflow-definitions.json';

const desktopFactory = new DesktopFactory(workflowDefinitions, taskBuilders);
const desktop = desktopFactory.createDesktop();
const body = document.querySelector('body');
desktop.attachTo(body);
desktop.setHeaderText('Gem');
desktop.setFooterStatus('OK');
desktop.setFooterText('\xA9 Your Name Here');
desktop.setLogo(logo);
desktop.addNavCommand('Change Status', 'set-status', {status: 'not OK'});

console.log('Gem initialised');

