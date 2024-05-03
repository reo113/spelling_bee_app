import { useCallback, useEffect, useState,useContext } from "react";
import GameFactory from "../factory/gameFactory";
import GameWrapper from "../wrapper/GameWrapper";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
const StartGame = () => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const { gameType } = useParams();
  const { currentUser } = useContext(AuthContext);

  // Define fetchData using useCallback
  let userId = null;
  if(currentUser){
    userId = currentUser.id;
  }
  const fetchData = useCallback((type) => {
  console.log("fetching",type);
    setLoading(true);
    axios
      .post(`/api/v1/${type}`,{userId:userId, type:type})
      .then((response) => {
        const data = response.data;
        const newGame = GameFactory.createGame(type, data);
        setGame(newGame);
        setLoading(false);
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
    if (!game && gameType) {
      fetchData(gameType);
    }
  }, [gameType, fetchData,game]);

  const onGameOver = useCallback(() => {
    setGame(null); 
  }, []);

  if (loading) return <div>Loading...</div>;

  return <GameWrapper game={game} gameType={gameType} onGameOver={onGameOver} />;
};

export default StartGame;
