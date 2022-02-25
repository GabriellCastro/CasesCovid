import React from 'react';

function Loading() {
  return (
    <span className="flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex bg-sky-500"></span>
    </span>
  );
}

export default Loading;
