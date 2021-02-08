import React from "react";
import { useIdle } from 'react-use';
import { useDarkMode, DarkModeExample } from './useDarkMode'
import HitCounter from "./HitCounter";
import MemberList from "./MemberList";
import MemberListComplex from "./MemberListComplex";
import OnlineStatus from './OnlineStatus';
import ChatBot from './ChatBot';
import ChangeTitle from './ChangeTitle';
import FetchData from './FetchData';
import GlobalValue from './GlobalValue';
import ReduxLike from './ReduxLike';
import { INIT_LIST } from './data/INIT_LIST';

import 'mvp.css';
import "./styles.css";

export default function App() {
  const isIdle = useIdle(3e3);
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
              <a href="#hooksReference">Hooks Reference</a>
            </li>
            <li>
              <a href="#darkMode" onClick={toggleTheme}>
                <small>Switch theme</small>
              </a>
            </li>
          </ul>
          <div>User is idle: {isIdle ? 'Yes 😴' : 'Nope'}</div>
        </nav>
      </header>

      <main>
        <header>
          <h1>Introduction to React Hooks</h1>
        </header>
        <p>
          In order to use React hooks we need to write functional components.
          The transition from class based components to functional components is
          really quite easy. Functional components and hooks solve a lot of
          architectural issues. And, they are backwards-compatible. So you don't
          have to write your hole application to use them.
        </p>

        <p>
          The rules of using hooks are fairly simple. Treat them as regular
          JavaScript functions. Only call Hooks at the top level. Don’t call
          Hooks inside loops, conditions, or nested functions. Only call Hooks
          from React function components. Don’t call Hooks from regular
          JavaScript functions. (There is just one other valid place to call
          Hooks — your own custom Hooks. We’ll learn about them in a moment.)
        </p>
        <p>
          These examples rely heavily on the the user reviewing the source code.
          You are encouraged to read through the files in this project to
          understand how things work.
        </p>
        <p></p>
      </main>
      <hr />
      <main id="basicHooksUseState">
        <article>
          <header>
            <h2>State</h2>
          </header>
          <aside>
            <p>
              The most common "basic hook" you'll use will be{' '}
              <code>useState</code> for your commponent's state. This will
              replace <code>setState</code>.
            </p>
          </aside>
        </article>
      </main>

      <section>
        <aside>
          <h3>
            Example of <code>useState</code>
            <br />
            <small>`./HitCounter.js`</small>
          </h3>
          <p>
            An example of <code>useState</code> as a <code>class</code>{' '}
            component and as a functional component using hooks.
          </p>
          <HitCounter btnText="Counter total: " />
          <details>
            <summary>More</summary>
            <p>
              Don't let this hook fool you. The <code>useState</code> hook is
              just a wrapper around <code>setState</code>. It functions in very
              similar ways with only slight variations that actually improve
              state management.
            </p>
          </details>
        </aside>
        <aside>
          <h3>
            Complex <code>useState</code>
            <br />
            <small>`./MemberList.js`</small>
          </h3>
          <p>Nested state example.</p>
          <MemberList initList={INIT_LIST} />
          <details>
            <summary>More</summary>
            <p>
              This example was designed to help stretch the imagination on how
              the <code>useState</code> hook can be used. Components rarely have
              a single boolean, or string as their only state. When your state
              starts to get a bit more complex, a more regulated solution might
              be in order. As in our next example where we are using the{' '}
              <code>useReducer</code> hook.
            </p>
          </details>
        </aside>
        <aside>
          <h3>
            Now with <code>useReducer</code>
            <br />
            <small>`./MemberListComplex.js`</small>
          </h3>
          <p>
            With more complex state it is sometimes better to use{' '}
            <code>useReducer</code>.
          </p>
          <MemberListComplex initList={INIT_LIST} />
        </aside>
      </section>

      <hr />

      <main id="basicHooksUseEffect">
        <article>
          <header>
            <h2>Side Effects</h2>
          </header>
          <aside>
            React's <code>useEffect</code> hook runs side-effects independently
            of rendering. Put your side-effect logic into the callback function,
            then use the dependencies argument to control when you want the
            side-effect to run.
          </aside>
        </article>
      </main>

      <section>
        <aside>
          <h3>
            Simple <code>useEffect</code>
            <br />
            <small>`./OnlineStatus.js`</small>
          </h3>
          <p>
            Instead of thinking in terms of “mounting” and “updating”, you might
            find it easier to think that effects happen “after render”. Our
            component renders we check for an online status. Then we cleanup our
            <code>eventListener</code> once the component unmounts.
          </p>
          <OnlineStatus />
          <details>
            <summary>More</summary>
            <p>
              We are also passing an empty array as our dependencies. This tells
              our <code>useEffect</code> to only run once. With this small
              example we are reproducing the past efforts of{' '}
              <code>componentDidMount</code>, <code>componentDidUpdate</code>{' '}
              and <code>componentWillUnmount</code>.
            </p>
          </details>
        </aside>

        <aside>
          <h3>
            The dependencies of <code>useEffect</code>
            <br />
            <small>`./ChatBot.js`</small>
          </h3>
          <p>
            Using the dependencies argument of <code>useEffect()</code> you
            control when to invoke the side-effect, independently from the
            rendering cycles of the component..
          </p>
          <ChatBot />
        </aside>
      </section>

      <hr />

      <main id="basicHooksUseContext">
        <article>
          <header>
            <h2>Context</h2>
          </header>
          <aside>
            <p>
              Context is primarily used when some data needs to be accessible by
              many components at different nesting levels. Apply it sparingly
              because it makes component reuse more difficult.
            </p>
            <p>
              Context can make a nice simple alternative to Redux when your data
              is simple or your app is small.
            </p>
          </aside>
        </article>
      </main>

      <section>
        <aside>
          <h3>
            The <code>Provider</code> / <code>Consumer</code> way.
            <br />
            <small>`./GlobalValue.js`</small>
          </h3>
          <p>
            The <code>createContext</code> returns two objects: provider, and
            consumer. Use the provider to make the value available to children
            and grandchildren. Use the consumer to get the value from context.
          </p>
          <GlobalValue />
          <details>
            <summary>More</summary>
            <p>
              It will make this value available to all of its descendants, and
              their descendants. The whole subtree will be able to use the
              Consumer (or useContext) to read out the value.
            </p>
          </details>
        </aside>

        <aside>
          <h3>
            Mixing <code>useContext</code> with <code>useReducer</code> will get
            you something close to Redux.
            <br />
            <small>`./ReduxLike.js`</small>
          </h3>
          <p>
            In this example we create a store that we can "store" data in,
            retrieve data from, and pass to any part of our app.
          </p>
          <ReduxLike />
          <details>
            <summary>More</summary>
            <p>
              If you're only using Redux to avoid passing down props, context
              could replace Redux - but then you probably didn't need Redux in
              the first place. Context also doesn't give you anything like the
              Redux DevTools, the ability to trace your state updates,
              middleware to add centralized application logic, and other
              powerful capabilities that Redux enables.
            </p>
          </details>
        </aside>
      </section>

      <hr />

      <main id="customHooks">
        <article>
          <header>
            <h2>Custom</h2>
          </header>
          <aside>
            <p>
              Simply put "building your own Hooks lets you extract component
              logic into reusable functions."
            </p>
            <p>
              This is eminsly more helpful than creating a higher order
              component (HOC), let's say, in a <code>class</code> based
              component and being forced into a specific archetecture.
            </p>
          </aside>
        </article>
      </main>

      <section>
        <aside>
          <h3>
            Example of a custom hook
            <br />
            <small>`./useDarkMode.js`</small>
          </h3>
          <p>
            This custom hook can be reused, not just in the current project, but
            in any project. Clicking the button will toggle the text between
            'light' and 'dark' (the real deal is up in the nav).
          </p>
          <DarkModeExample />
          <details>
            <summary>More</summary>
            <p>
              Within the code for this custom hook you will see another
              component called <code>DarkModeExample</code>. I created this
              purly for testing since you can't call hooks outside of
              components.
            </p>
          </details>
        </aside>

        <aside>
          <h3>
            Fetching data
            <br />
            <small>`./useFetch.js`</small>
          </h3>
          <p>This is one of the more common custom hooks you may use.</p>
          <FetchData apiEndPoint="https://jsonplaceholder.typicode.com/posts" />
          <details>
            <summary>More</summary>
            <p>
              Within the code for this custom hook you will see another
              component called <code>DarkModeExample</code>. I created this
              purly for testing since you can't call hooks outside of
              components.
            </p>
          </details>
        </aside>

        <aside>
          <h3>
            Reusing hooks
            <br />
            <small>`github.com/streamich/react-use`</small>
          </h3>
          <p></p>
          <ChangeTitle />
          <details>
            <summary>More</summary>
            <p>
              Within the code for this custom hook you will see another
              component called <code>DarkModeExample</code>. I created this
              purly for testing since you can't call hooks outside of
              components.
            </p>
          </details>
        </aside>
      </section>
      <hr />

      <main id="hooksReference">
        <article>
          <header>
            <h2>Reference</h2>
          </header>
          <aside></aside>
        </article>
      </main>

      <section>
        <ul>
          <li>
            <a href="https://reactjs.org/docs/hooks-reference.html#additional-hooks">
              Additional hooks -
              https://reactjs.org/docs/hooks-reference.html#additional-hooks
            </a>
          </li>
          <li>
            <a href="https://reactjs.org/docs/hooks-overview.html">
              Hooks at a glance - https://reactjs.org/docs/hooks-overview.html
            </a>
          </li>
          <li>
            <a href="https://blog.logrocket.com/tdd-with-react-test-renderer/">
              Comparing testing frameworks -
              https://blog.logrocket.com/tdd-with-react-test-renderer/
            </a>
          </li>
          <li>
            <a href="https://medium.com/better-programming/testing-your-components-in-react-967abda02396">
              Testin components -
              https://medium.com/better-programming/testing-your-components-in-react-967abda02396
            </a>
          </li>
          <li>
            <a href="https://blog.logrocket.com/comparing-react-testing-libraries/">
              Comparing react testing libraries -
              https://blog.logrocket.com/comparing-react-testing-libraries/
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
