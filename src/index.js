
import './desktop.css';
import './logo.png';

import {GemApp} from './components';
window.customElements.define('gem-app', GemApp, {extends: 'div'});
const app = document.createElement('div', {is: 'gem-app'});
app.classList.add('vbox');
document.body.appendChild(app);

