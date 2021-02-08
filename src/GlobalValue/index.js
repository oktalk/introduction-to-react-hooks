import Header from './Header';
import Footer from './Footer';
import {NumberContext} from './number-context';

function GlobalValue() {
  return (
    <div>
      <NumberContext.Provider value={42}>
        <Header />
        <div>
          <Display />
        </div>
      </NumberContext.Provider>
      <Footer />
    </div>
  );
}

function Display() {
  return (
    <NumberContext.Consumer>
      {(value) => <div>The answer is {value}.</div>}
    </NumberContext.Consumer>
  );
}

export default GlobalValue;
