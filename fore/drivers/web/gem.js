
import './assets/desktop.css';
import './assets/logo.png';

import {GemRoot} from './components';
window.customElements.define('gem-root', GemRoot, {extends: 'div'});
const root = document.createElement('div', {is: 'gem-root'});
document.body.appendChild(root);

