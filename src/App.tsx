import {useState, useEffect} from "react";

type Joke = {
    id: string;
    joke: string;
}

function App() {
    const [jokeHistory, setJokeHistory] = useState<Joke[]>([]);
    const [joke, setJoke] = useState("");
    const [loading, setLoading] = useState(true);

    const getJokes = () => {
        setLoading(true);

        fetch('http://localhost:7000/random-joke').then((response) => response.json()).then((data) => {
            console.log(data);
            setJokeHistory([data, ...jokeHistory]);
            setJoke(data.joke);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            alert(error.message);
        })
    };

    useEffect(() => {
        getJokes();
    }, []);

    return (
        <div className="flex flex-col items-center h-screen overflow-y-auto py-8">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img className="h-12 w-12" src="chuck-norris.webp" alt="Joke Icon"/>
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">{joke}</div>
                            <p className="text-gray-500">Click Generate for a new joke!</p>
                        </div>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                        onClick={getJokes}
                    >
                        Generate
                    </button>
                </>
            )}
            <div className="mt-4 p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-x-4">
                {jokeHistory.map((j, index) => (
                    <div key={index} className="mt-2 w-full flex flex-row items-center justify-items-start space-x-4">
                        <img className="h-8 w-8" src="chuck-norris.webp" alt="Joke Icon"/>
                        <div className="text-lg font-medium text-black">{j.joke}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App
