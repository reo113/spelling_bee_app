import { SetStateAction, useCallback, useState } from "react";
import GameFactory from "../factory/gameFactory";
import GameHub from "../wrapper/GameHub";
import axios from "axios";

const StartGame = () => {
  const [game, setGame] = useState(null);
  const [gameType, setGameType] = useState("");

  const fetchData = useCallback((type: SetStateAction<string>) => {
    axios
      .get(`http://localhost:3001/${type}`)
      .then((response) => {
        const data = response.data;
        const newGame = GameFactory.createGame(type, data);
        setGame(newGame);
        setGameType(type);
        console.log("fetched");
      })
      .catch((error) => {
        console.error("Failed to load game data:", error);
        setGame(null);
      });
  }, []);

  const startGame = (type: SetStateAction<string>) => {
    fetchData(type);
  };

  const onGameOver = useCallback(() => {
    setGame(null); 
}, []);

  return (
    <div>
      {!game ? (
        <div>
          <button onClick={() => startGame("definition")}>
            Start Definition Game
          </button>
          <button onClick={() => startGame("audio")}>Start Audio Game</button>
          <button onClick={() => startGame("sentence")}>
            Start Sentence Game
          </button>
        </div>
      ) : (
        <GameHub
          game={game}
          gameType={gameType}
          onGameOver={onGameOver}
        />
      )}
    </div>
  );
};

export default StartGame;
