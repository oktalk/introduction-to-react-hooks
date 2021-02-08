import { useEffect, useState } from 'react';

function ReplyMessage({ message }) {
  const initReply = 'Waiting...';
  const [reply, setReply] = useState(initReply);
  useEffect(() => {
    setReply(initReply);
    const id = setTimeout(() => {
      setReply(`Hello ${message}`);
    }, 2000);
    return () => {
      clearTimeout(id);
    };
  }, [message]);

  return <div className="message">{reply}</div>;
}

export default function ChatBot() {
  const [message, setMessage] = useState('');

  return (
    <div>
      <h3>What is your name?</h3>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {message && <ReplyMessage message={message} />}
    </div>
  );
}
