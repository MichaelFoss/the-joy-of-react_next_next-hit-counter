import React from 'react';
import { useHits } from './useHits';
import CensorButton from '../components/CensorButton';

function Home() {
  const hits = useHits();

  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number <CensorButton>{hits}</CensorButton>.
      </p>
    </main>
  );
}

export default Home;
