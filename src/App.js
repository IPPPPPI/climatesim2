import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Game from "./Game";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="content">
      {gameStarted ? (
        <Game />
      ) : (
        <>
          <p>Welcome to climate simulator currently in testing</p>
          <button type="button" onClick={() => setGameStarted(true)}>
            Start Game
          </button>
        </>
      )}
    </div>
  );
}

export default App;
