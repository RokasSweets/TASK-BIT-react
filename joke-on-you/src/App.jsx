import React, { useState, useEffect } from "react";
import NewJokes from "./Components/NewJokes";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
<>
        <div className="app-title">
        <h1>Programming Jokes</h1>
        </div>

            <div className="terminal">
              <p>Jokes.exe is running</p>
            </div>
            <div className="jokes col-12">
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
        </>
    );
}

export default App;