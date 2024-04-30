import { useCallback, useEffect, useState } from "react";
import GameFactory from "../factory/gameFactory";
import GameWrapper from "../wrapper/GameWrapper";
import axios from "axios";
import { useParams } from "react-router-dom";

const StartGame = () => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const { gameType } = useParams();

  // Define fetchData using useCallback
  const fetchData = useCallback((type) => {
    setLoading(true); // Ensure loading is set when starting a new fetch
    axios
      .get(`/api/v1/${type}`)
      .then((response) => {
        const data = response.data;
        const newGame = GameFactory.createGame(type, data);
        setGame(newGame);
        setLoading(false); // Set loading to false upon successful fetch
        console.log("fetched");
      })
      .catch((error) => {
        console.error("Failed to load game data:", error);
        setGame(null);
        setLoading(false); // Set loading to false also on error
      });
  }, []);

  // useEffect to call fetchData when gameType changes
  useEffect(() => {
    if (gameType) {
      fetchData(gameType);
    }
  }, [gameType, fetchData]);

  const onGameOver = useCallback(() => {
    setGame(null); // Potentially you might want to set loading to true here if you restart the fetching
  }, []);

  if (loading) return <div>Loading...</div>;

  return <GameWrapper game={game} gameType={gameType} onGameOver={onGameOver} />;
};

export default StartGame;
