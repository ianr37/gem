
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

class GemApp {

    constructor()
    {
    }

    clickEventHandler(event) {
        console.log(`app received click`);
    };

    generateDesktop() {
        const parser = new DOMParser();
        const dom = parser.parseFromString(template, 'text/html');
        const body = dom.querySelector('body');
        const result = [];
        for (const entry of body.childNodes) {
            result.push(entry);
        }
        return result;
    };

}

module.exports = { GemApp };

