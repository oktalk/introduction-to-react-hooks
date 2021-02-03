import { useState } from 'react';
import {useTitle} from 'react-use';

const ChangeTitle = () => {
  const [title, setTitle] = useState('Hello World!');
  useTitle(title);
  return (
    <input value={title} onChange={(e) => setTitle(e.target.value)} />
  );
}

export default ChangeTitle;