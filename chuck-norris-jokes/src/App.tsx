import React, { useState } from 'react';
import axios from 'axios';
import JokeDisplay from './components/JokeDisplay';
import './styles/App.css';

const App: React.FC = () => {
  const [joke, setJoke] = useState<string>('');
  const [error, setError] = useState<string>('');

  const fetchJoke = async () => {
    try {
      const response = await axios.get('http://localhost:3000/random-joke');
      setJoke(response.data.value);
      setError('');
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(`Erro ${err.response.status}: ${err.response.data.error}`);
      } else {
        setError('Falha ao buscar piada. Por favor, tente novamente mais tarde.');
      }
      setJoke('');
    }
  };

  return (
    <div className="App">
      <JokeDisplay joke={joke} />
      {error && <p className="error">{error}</p>}
      <button onClick={fetchJoke}>Buscar Outra Piada</button>
    </div>
  );
};

export default App;
