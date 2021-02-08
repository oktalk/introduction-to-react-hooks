import {useContext} from 'react';
import { NumberContext } from './number-context';

const Footer = function () {
  const value = useContext(NumberContext);
  return (
    <p>
      <small>also... {value}</small>
    </p>
  );
};

export default Footer;
