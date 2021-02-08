import React, { useState, useEffect } from 'react';

function getOnlineStatus() {
  return typeof navigator !== 'undefined' &&
    typeof navigator.onLine === 'boolean'
    ? navigator.onLine
    : true;
}

export default function OnlineStatus() {
  const [onlineStatus, setOnlineStatus] = useState(getOnlineStatus());
  const goOnline = () => setOnlineStatus(true);
  const goOffline = () => setOnlineStatus(false);

  useEffect(() => {
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  return (
    <div>
      <p>You are <sup>{onlineStatus ? 'online' : 'offline'}</sup>.</p>
    </div>
  );
}
