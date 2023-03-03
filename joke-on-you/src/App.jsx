import React, { useState, useEffect } from "react";
import NewJokes from "./Components/NewJokes";
import './App.css'

function App() {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
            .then((response) => response.json())
            .then((data) => {
                setJokes(data.jokes);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="App">
            <h1>Programming Jokes</h1>
            <div className="terminal">
              <p>Jokes.exe is running</p>
            </div>
            <div className="App-header">
            <ul>
                {jokes.map((joke) => (
                    <li key={joke.id}>
                        {joke.type === "single"
                            ? joke.joke
                            : joke.setup + " " + joke.delivery}
                    </li>
                ))}
            </ul>
            </div>
            <NewJokes/>
        </div>
    );
}

export default App;