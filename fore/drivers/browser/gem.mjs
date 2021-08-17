
import { DriverAction, ExecutionEnvironment } from '../../domain/index.mjs';

import { createDesktop } from '../../adapters/index.mjs';

import { tasklets } from '../../use-cases/index.mjs';

import './assets/desktop.css';
import logo from './assets/logo.png';
import workflows from '../../use-cases/workflow-definitions.json';


const parent = document.querySelector('body');
const env = new ExecutionEnvironment(document, parent, workflows, tasklets, logo);
const desktop = createDesktop(env);
desktop.setHeaderText('Gem');
desktop.setFooterStatus('OK');
desktop.setFooterText('\xA9 Your Name Here');
desktop.setLogo(logo);
desktop.addNavCommand('Change Status', 'set-status', {status: 'not OK'});

console.log('Gem initialised');

