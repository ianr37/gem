
import { DriverAction } from '../../domain/index.mjs';

import { createDesktop } from '../../adapters/index.mjs';

import { taskBuilders } from '../../use-cases/task-builders.mjs';

import './assets/desktop.css';
import logo from './assets/logo.png';
import workflowDefinitions from '../../use-cases/workflow-definitions.json';

const desktop = createDesktop(workflowDefinitions, taskBuilders);
const body = document.querySelector('body');
desktop.attachTo(body);
desktop.setHeaderText('Gem');
desktop.setFooterStatus('OK');
desktop.setFooterText('\xA9 Your Name Here');
desktop.setLogo(logo);
desktop.addNavCommand('Change Status', 'set-status', {status: 'not OK'});

console.log('Gem initialised');

