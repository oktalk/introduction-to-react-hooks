import React from "react";
import { useDarkMode, DarkModeExample } from './useDarkMode'
import HitCounter from "./HitCounter";
import MemberList from "./MemberList";
import MemberListComplex from "./MemberListComplex";
import ChangeTitle from "./ChangeTitle";
import { INIT_LIST } from '../data/INIT_LIST';

import 'mvp.css';
import "./styles.css";

export default function App() {
  const { theme, toggleTheme } = useDarkMode()
  return (
    <div className="App" data-theme={theme}>
      <header>
        <nav>
          <a href="https://cj500.csb.app/">React Hooks</a>
          <ul>
            <li>
              <a href="#basicHooksUseState">useState</a>
            </li>
            <li>
              <a href="#basicHooksUseEffect">useEffect</a>
            </li>
            <li>
              <a href="#basicHooksUseContext">useContext</a>
            </li>
            <li>
              <a href="#customHooks">Custom Hooks</a>
            </li>
            <li>
              <a href="#darkMode" onClick={toggleTheme}>
                <small>Switch theme</small>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <header>
          <h1>Introduction to React Hooks</h1>
        </header>
        <p>In order to use React hooks we need to write functional components. The transition from class based components to functional components is really quite easy. Functional components and hooks solve a lot of archetectual issues and as an added bonus, they more closely resemble vanilla JavaScript making your code more readable.</p>

        <p>These examples rely heavily on the the user reviewing the source code. You are encouraged to read through the files in this project to understand how things work.</p>
      </main>
      <hr />
      <main id="basicHooksUseState">
        <article>
          <header>
            <h2>State</h2>
          </header>
          <aside>
            <p>The most common "basic hook" you'll use will be <code>useState</code> for your commponent's state management. This will replace <code>setState</code> and is infact a wrapper around the old method to be used with functional components.</p>
          </aside>
        </article>
      </main>

      <section>
        <aside>
          <h3>
            Example of <code>useState</code><br />
            <small>`./HitCounter.js`</small>
          </h3>
          <p>An example of <code>useState</code> as a <code>class</code> component and as a functional component using hooks.</p>
          <HitCounter btnText="Counter total: " />
          <details>
            <summary>More</summary>
            <p>Don't let this hook fool you. The <code>useState</code> hook is just a wrapper around <code>setState</code>. It functions in very similar ways with only slight variations that actually improve state management.</p>
          </details>
        </aside>
        <aside>
          <h3>Complex <code>useState</code><br />
          <small>`./MemberList.js`</small>
          </h3>
          <p>Nested state example.</p>
          <MemberList initList={INIT_LIST} />
          <details>
            <summary>More</summary>
            <p>This example was designed to help stretch the imagination on how the <code>useState</code> hook can be used. Components rarely have a single boolean, or string as their only state. When your state starts to get a bit more complex, a more regulated solution might be in order. As in our next example where we are using the <code>useReducer</code> hook.</p>
          </details>
        </aside>
        <aside>
          <h3>Now with <code>useReducer</code><br />
          <small>`./MemberListComplex.js`</small></h3>
          <p>With more complex state it is sometimes better to use <code>useReducer</code>.</p>
          <MemberListComplex initList={INIT_LIST} />
          <details>
            <summary>More</summary>
            <p></p>
          </details>
        </aside>
      </section>

      <hr />

      <main id="basicHooksUseEffect">
        <article>
          <header>
            <h2>Lifecycle</h2>
          </header>
          <aside>
            
          </aside>
        </article>
      </main>

      <section>
        <aside>
        </aside>
      </section>

      <hr />

      <main id="basicHooksUseContext">
        <article>
          <header>
            <h2>Context</h2>
          </header>
          <aside>
            
          </aside>
        </article>
      </main>

      <section>
        <aside>
        </aside>
      </section>

      <hr />

      <main id="customHooks">
        <article>
          <header>
            <h2>Custom</h2>
          </header>
          <aside>
            <p>Simply put "building your own Hooks lets you extract component logic into reusable functions."</p>
            <p>This is eminsly more helpful than creating a higher order component (HOC), let's say, in a <code>class</code> based component and being forced into a specific archetecture.</p>
          </aside>
        </article>
      </main>

      <section>
        <aside>
          <h3>
            Example of a custom hook<br />
            <small>`./useDarkMode.js`</small>
          </h3>
          <p>This custom hook can be reused, not just in the current project, but in any project. Clicking the button will toggle the text between 'light' and 'dark' (the real deal is up in the nav).</p>
          <DarkModeExample />
          <details>
            <summary>More</summary>
            <p>Within the code for this custom hook you will see another component called <code>DarkModeExample</code>. I created this purly for testing since you can't call hooks outside of components.</p>
          </details>
        </aside>

        <aside>
          <h3>
            Reusing hooks<br />
            <small>`github.com/streamich/react-use`</small>
          </h3>
          <p></p>
          <ChangeTitle />
          <details>
            <summary>More</summary>
            <p>Within the code for this custom hook you will see another component called <code>DarkModeExample</code>. I created this purly for testing since you can't call hooks outside of components.</p>
          </details>
        </aside>
      </section>

    </div>
  );
}
