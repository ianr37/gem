
const template = `
    <body>
        <header>
            <h1>Application Header</h1>
        </header>
        <nav>
          <img src="logo.png"/>
          <menu>
              <button>Nav 1</button>
              <button>Nav 2</button>
              <button>Nav 3</button>
              <button>Nav 4</button>
              <button>Nav 5</button>
          </menu>
        </nav>
        <main>
          <menu>
              <button>Menu 1</button>
              <button>Menu 2</button>
              <button>Menu 3</button>
              <button>Menu 4</button>
              <button>Menu 5</button>
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

class GemRoot extends HTMLDivElement {

    constructor()
    {
        super();
    }

    connectedCallback() {
        if (this.isConnected && this.childElementCount == 0) {
            for (const element of this.generateDesktop()) {
                this.appendChild(element);
            }
        }
    }

    clickEventHandler(event) {
        console.log(`app received click`);
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

module.exports = { GemRoot };

