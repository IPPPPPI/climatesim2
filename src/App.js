import "./App.css";
import { useState } from "react";
import Game from "./Game";

//the start screen at the start
function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="content">
      {gameStarted ? (
        <Game />
      ) : (
        <>
          <p className="startText">
            Welcome to climate simulator currently in testing
          </p>
          <button
            className="startButtonTag"
            type="button"
            onClick={() => setGameStarted(true)}
          >
            Start Game
          </button>
        </>
      )}
    </div>
  );
}

export default App;
