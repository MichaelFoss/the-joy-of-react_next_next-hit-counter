import React from 'react';
import HitCounter from '../components/HitCounter';
import { useHits } from './useHits';

function Home() {
  const hits = useHits();

  return (
    <main>
      <h1>Welcome!</h1>
      <p>You are visitor number <HitCounter hits={hits} />.</p>
    </main>
  );
}

export default Home;

