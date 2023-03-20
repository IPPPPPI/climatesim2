import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Game from "./Game";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  
  return gameStarted ? (
    <Game />
  ) : (
    <>
      <p>Welcome to climate simulator currently in testing</p>
      <button type="button" onClick={() => setGameStarted(true)}>
        Start Game
      </button>
    </>
  );
}

export default App;
