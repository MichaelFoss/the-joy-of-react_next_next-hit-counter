'use client';
import React, { useState } from 'react';

import './styles.css';

export function CensorButton({ children }) {
  const [isCensored, setIsCensored] = useState(true);
  const className = isCensored ? 'censored' : '';
  return (
    <button
      className={className}
      onClick={() => setIsCensored(!isCensored)}
    >
      {children}
    </button>
  );
}

