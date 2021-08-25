
import { DriverAction, ExecutionEnvironment } from '../../domain/index.mjs';

import { createDesktop, createWorkpane } from '../../adapters/index.mjs';

import { tasklets } from '../../use-cases/index.mjs';

import { Configuration } from '../configuration.mjs';

import './assets/desktop.css';
import logo from './assets/logo.png';
import rawConfiguration from './configuration.json';

const cfg = new Configuration(rawConfiguration);
const body = document.querySelector('body');
const env = new ExecutionEnvironment(cfg, logo, tasklets, document);

const desktop = createDesktop(env);
desktop.attachTo(body);

desktop.setHeaderText('Gem');
desktop.setFooterStatus('OK');
desktop.setFooterText('\xA9 Your Name Here');
desktop.setLogo(logo);
desktop.addNavCommand('Change Status', 'set-status', {status: 'not OK'});

console.log('Gem initialised');

