
const template = `
    <main>
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
        <article>
          <menu>
            <button>Menu 1</button>
            <button>Menu 2</button>
            <button>Menu 3</button>
            <button>Menu 4</button>
            <button>Menu 5</button>
          </menu>
          <section>
            <h4>Article header</h4>
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
          Aside
        </aside>
        <footer>
          <span>&#169; Your Name Here</span>
        </footer>
    </main>
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
        const result = dom.querySelector('main');
        return result;
    };

}

module.exports = { GemApp };

