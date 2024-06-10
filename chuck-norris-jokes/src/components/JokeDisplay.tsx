import React from 'react';

interface JokeDisplayProps {
  joke: string;
}

const JokeDisplay: React.FC<JokeDisplayProps> = ({ joke }) => {
  return (
    <div>
      <h1>Chuck Norris Joke</h1>
      <p>{joke}</p>
    </div>
  );
};

export default JokeDisplay;
