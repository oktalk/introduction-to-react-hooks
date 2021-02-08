import { NumberContext } from './number-context';

const Header = function () {
  return (
    <p>
      Header{' '}
      <NumberContext.Consumer>
        {(value) => <small>{value}</small>}
      </NumberContext.Consumer>
    </p>
  );
};

export default Header;
