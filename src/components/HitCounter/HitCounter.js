'use client';
import React, { useState } from 'react';

import './styles.css';

export function HitCounter({ hits }) {
  const [isCensored, setIsCensored] = useState(true);
  const className = isCensored ? 'censored' : '';
  return (
    <button
      className={className}
      onClick={() => setIsCensored(!isCensored)}
    >
      {hits}
    </button>
  );
}

