import React from 'react';
import HitCounter from '../components/HitCounter';
import CensorButton from '../components/CensorButton';

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number
        {' '}
        <CensorButton>
          <HitCounter />
        </CensorButton>
        .
      </p>
    </main>
  );
}

export default Home;

