import React, { useEffect, useState } from 'react';
import Joke from './components/Joke';
import { getRandomJoke } from './services/api';

const App: React.FC = () => {
  const [joke, setJoke] = useState<string>('');

  const fetchJoke = async () => {
    try {
      const data = await getRandomJoke();
      setJoke(data.joke);
    } catch (error) {
      console.error("Error to find a joke:", error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h1>Chuck Norris Jokes</h1>
      <Joke joke={joke} />
      <button onClick={fetchJoke}>Get Another Joke</button>
    </div>
  );
};

export default App;

