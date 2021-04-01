
import './desktop.css';
import './logo.png';
import './favicon.ico';

import {GemApp} from './components';

const app = new GemApp();

for (const entry of app.generateDesktop()) {
    document.body.appendChild(entry);
}

