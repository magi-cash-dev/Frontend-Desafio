import React, { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const [problem, setProblem] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/random-joke");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setJoke(data.joke);
      setProblem(false);
      setLoading(false);
    } catch (error) {
      setProblem(true);
      setLoading(false);
    }
  };

  return (
    <div id="App">
      <a
        href="#"
        onClick={() => !loading && fetchJoke()}
        disabled={loading}
        className={loading ? "loading" : ""}
      >
        {loading ? "Loading..." : "Generate Joke"}
      </a>
      <div className="jokes">
        {problem && (
          <p className="alert">
            Sorry, something happened accessing your joke! Try again later.
          </p>
        )}
        {joke && <p className="joke">{joke}</p>}
      </div>
    </div>
  );
}

export default App;
