
const template = `
    <body>
        <header>
            <h1>Application Header</h1>
        </header>
        <main>
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
            <article>
              <menu>
                  <button>Menu 1</button>
                  <button>Menu 2</button>
                  <button>Menu 3</button>
                  <button>Menu 4</button>
                  <button>Menu 5</button>
              </menu>
              <section>
                  <h2>Article header</h2>
                  <label>User Name</label>
                  <input type="text" name="username"/>
                  <label>Password</label>
                  <input type="password" name="password"/>
                  <menu>
                      <input type="submit"/>
                  </menu>
              </section>
            </article>
            <aside>
                <h2>Aside</h2>
            </aside>
        </main>
        <footer>
          <span>&#169; Your Name Here</span>
        </footer>
    </body>
`;

const css = `
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 0.5em 0em 0.5em 0em;
      background: var(--header-background);
      color: var(--header-color);
    }

    main {
      display: flex;
      background: var(--main-background);
      color: var(--main-color);
      width: 100%;
      height: 100%;
    }

    main > nav {
      display: flex;
      flex-direction: column;
      background: var(--nav-background);
      color: var(--nav-color);
      padding: 0.5em 0.5em 0.5em 0.5em;
    }

    main > nav > img {
      width: 128px;
    }

    main > nav > menu {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
    }

    main > article {
      display: flex;
      flex-direction: column;
      background: var(--article-background);
      color: var(--article-color);
      width: 100%;
      padding: 0.5em 0.5em 0.5em 0.5em;
    }

    main > article > section {
      display: flex;
      flex-direction: column;
      background: var(--article-background);
      color: var(--article-color);
      width: 100%;
    }

    main > aside {
      display: flex;
      flex-direction: column;
      background: var(--aside-background);
      color: var(--aside-color);
      padding: 0.5em 0.5em 0.5em 0.5em;
    }

    footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 0.5em 0em 0.5em 0em;
      background: var(--footer-background);
      color: var(--footer-color);
    }

    menu {
      background-color: var(--menu-background);
      color: var(--menu-color);
      display: flex;
      justify-content: space-around;
      padding: 0.5em 1em 0.5em 1em;
    }

`;

class GemApp extends HTMLDivElement {

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
            result.push(entry);
        }
        return result;
    }

}

module.exports = { GemApp };

