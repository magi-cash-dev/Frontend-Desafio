import React, { useState } from 'react';
import { fetchRandomJoke } from '../services/api';

const Joke: React.FC = () => {
  const [joke, setJoke] = useState<string>('');

  const getNewJoke = async () => {
    try {
      const data = await fetchRandomJoke();
      setJoke(data.joke);
    } catch (error) {
      setJoke('Failed to fetch a joke.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <button onClick={getNewJoke} style={{ marginBottom: '20px' }}>Get a new joke</button>
      <p style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', backgroundColor: 'black', padding: '15px', borderRadius: '10px' }}>{joke}</p>
    </div>
  );
};

export default Joke;