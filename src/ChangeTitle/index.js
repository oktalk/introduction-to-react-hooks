import { useState } from 'react';
import {useTitle} from 'react-use';

const ChangeTitle = () => {
  const [title, setTitle] = useState('Hello World!');
  useTitle(title);
  return (
    <div>
      <label htmlFor="changeTitle">Change Title</label>
      <input
        id="changeTitle"
        name="changeTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default ChangeTitle;
