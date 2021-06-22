
import { DriverAction } from '../../../domain/index.mjs';

const template = `
    <body>
        <header>
            <h1>Application Header</h1>
        </header>
        <nav>
          <img src="logo.png"/>
          <menu>
              <button data-command="nav 1" title="I'm the first button on the navigation bar">Nav 1</button>
              <button data-command="nav 2" title="I'm the second button on the navigation bar">Nav 2</button>
              <button data-command="nav 3" title="I'm the third button on the navigation bar">Nav 3</button>
              <button data-command="nav 4" title="I'm the four button on the navigation bar">Nav 4</button>
              <button data-command="nav 5" title="I'm the fifth button on the navigation bar">Nav 5</button>
          </menu>
        </nav>
        <main>
          <menu>
              <button data-command="menu 1" title="I'm the first button on the menu">Menu 1</button>
              <button data-command="menu 2" title="I'm the second button on the menu">Menu 2</button>
              <button data-command="menu 3" title="I'm the third button on the menu">Menu 3</button>
              <button data-command="menu 4" title="I'm the fourth button on the menu">Menu 4</button>
              <button data-command="menu 5" title="I'm the fifth button on the menu">Menu 5</button>
          </menu>
          <article>
              <h2>Article header</h2>
              <label>User Name</label>
              <input type="text" name="username"/>
              <label>Password</label>
              <input type="password" name="password"/>
              <menu>
                  <input type="submit"/>
              </menu>
          </article>
        </main>
        <aside>
            <h2>Aside</h2>
        </aside>
        <footer>
          <span>&#169; Your Name Here</span>
        </footer>
    </body>
`;

export class HtmlDesktop extends HTMLDivElement {

    constructor()
    {
        super();
        this.controllerCallback = null;
    }

    connectedCallback() {
        if (this.isConnected && this.childElementCount == 0) {
            for (const element of this.generateDesktop()) {
                this.appendChild(element);
            }
            this.addEventListener('click', this.clickEventHandler);
        }
    }

    clickEventHandler(event) {
        console.log(`app received click`);
        if (this.controller) {
            const dataset = event.target.dataset;
            if (dataset) {
                this.controllerCallback(new Action(dataset.taskId, dataset.command, dataset.parameters));
            } else {
                console.log('no dataset on target');
            }
        }
    }

    generateDesktop() {
        const parser = new DOMParser();
        const dom = parser.parseFromString(template, 'text/html');
        const body = dom.querySelector('body');
        const result = [];
        for (const entry of body.childNodes) {
            result.push(document.importNode(entry, true));
        }
        return result;
    }

}

