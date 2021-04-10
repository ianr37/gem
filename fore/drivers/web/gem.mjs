
import './assets/desktop.css';
import './assets/logo.png';
import { GemRoot } from './components/index.mjs';
import { Controller, Presenter } from '../../adapters/index.mjs';

window.customElements.define('gem-root', GemRoot, {extends: 'div'});
const root = document.createElement('div', {is: 'gem-root'});
const presenter = new Presenter(root);
const controller = new Controller(presenter);
root.controller = controller;
document.body.appendChild(root);

